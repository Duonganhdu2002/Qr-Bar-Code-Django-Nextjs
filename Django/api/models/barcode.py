from rest_framework import serializers
from base.models import Barcode

class BarcodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Barcode
        fields = ['image', 'created']
