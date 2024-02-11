from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Barcode
from ..models.barcode import BarcodeSerializer
from barcode import EAN13
from barcode.writer import ImageWriter

@api_view(['POST'])
def inputNumber(request):
    user_code = request.data.get('user_code')

    try:
        my_code = EAN13(user_code, writer=ImageWriter())
        image_path = f"nextjs/public/assets/images/image-barcode/barcode_{user_code}"
        image_path1 = f"barcode_{user_code}.png"
        my_code.save(image_path)
    except Exception as e:
        return Response({'error': str(e)}, status=500)

    barcode_data = {'image': image_path1}
    serialize = BarcodeSerializer(data=barcode_data)
    
    if serialize.is_valid():
        serialize.save()
        return Response(serialize.data)
    else:
        return Response({'error': serialize.errors}, status=400)
