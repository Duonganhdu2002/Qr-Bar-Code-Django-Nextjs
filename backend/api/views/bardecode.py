from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..models.bardecode import BardecodeSerializer
import cv2
from pyzbar.pyzbar import decode

def read_barcodes(img_path):
    img = cv2.imread(img_path)
    detected_barcodes = decode(img)

    results = []
    for barcode in detected_barcodes:
        x, y, w, h = barcode.rect
        cv2.rectangle(img, (x - 10, y - 10), (x + w + 10, y + h + 10), (255, 0, 0), 2)

        if barcode.data:
            result = {
                'data': barcode.data.decode('utf-8'),
                'type': barcode.type,
            }
            results.append(result)

    return results

@api_view(['POST'])
def BarcodeReader(request):
    user_img = request.data.get('user_image')

    if not user_img:
        return Response({'error': 'Please provide a valid user_image in the request.'}, status=400)

    try:
        barcode_results = read_barcodes(user_img)
    except Exception as e:
        return Response({'error': str(e)}, status=500)

    if barcode_results:
        return Response({'numberString': barcode_results[0]['data']})
    else:
        return Response({'message': 'No barcodes detected in the image.'})
