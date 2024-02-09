from django.urls import path, include
from .views import serializer 
from .views import barcode

urlpatterns = [
    path('data/', include([
        path('get/', serializer.getData),
        path('add/', serializer.addItem),
    ])),
    path('barcode/', include([
        path('generate/', barcode.inputNumber),
    ])),
]