from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..models.qrcodeImage import QrCodeImageSerializer

@api_view(['POST'])
def image_qrcode_list(request):
    serializer = QrCodeImageSerializer(data=request.data)
    
    if serializer.is_valid():
        # Lưu ảnh và nhận tên file đã lưu
        saved_image = serializer.save()

        # Lấy tên file từ saved_image
        image_filename = saved_image.image.name

        # Trả về tên file trong response
        response_data = {
            'image_filename': image_filename,
            'message': 'Image saved successfully',
        }

        return Response(response_data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
