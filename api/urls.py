from django.urls import path, include
from .views import serializer 
from .views import barcode
from .views import qrcode
from .views import bardecode

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
]