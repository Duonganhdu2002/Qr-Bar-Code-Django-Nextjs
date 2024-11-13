from rest_framework import serializers
from base.models import BarCodeImage

class BarCodeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BarCodeImage
        fields = '__all__'