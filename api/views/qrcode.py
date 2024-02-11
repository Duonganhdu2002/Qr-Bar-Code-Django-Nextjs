from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Qrcode
from ..models.qrcode import QrcodeSerializer
import qrcode
import os
import re

@api_view(['POST'])
def inputLink(request):
    user_link = request.data.get('user_link')

    if not user_link:
        return Response({"error": "user_link is required"}, status=400)

    # Sanitize the user link to create a valid filename
    sanitized_user_link = re.sub(r'\W+', '', user_link)

    qr = qrcode.QRCode(
        version=1,
        box_size=10,
        border=5
    )

    qr.add_data(user_link)
    qr.make(fit=True)

    img = qr.make_image(fill='black', back_color='white')

    # Specify the directory where you want to save the QR code image
    image_directory = "nextjs/public/assets/images/image-qrcode/"
    image_filename = f"qrcode_{sanitized_user_link}.png"
    image_path = os.path.join(image_directory, image_filename)

    img.save(image_path)

    # Serialize and save to the database (optional)
    qrcode_data = {'image': image_filename}
    serializer = QrcodeSerializer(data=qrcode_data)
    if serializer.is_valid():
        serializer.save()

    return Response({"message": "QR code generated successfully", "image_path": image_path}, status=200)
