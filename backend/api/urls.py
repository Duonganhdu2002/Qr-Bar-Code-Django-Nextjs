from django.urls import path, include
from .views import serializer, barcode, qrcode, bardecode, barcodeImage

urlpatterns = [
    path('data/', include([
        path('get/', serializer.getData),
        path('add/', serializer.addItem),
    ])),
    path('barcode/', include([
        path('generate/', barcode.inputNumber),
        path('decode/', bardecode.BarcodeReader),
    ])),
    path('qrcode/', include([
        path('generate/', qrcode.inputLink),
    ])),
    path('upload/', include([
        path('barcode/', barcodeImage.image_barcode_list, name='image_barcode_list'),
    ])),

]