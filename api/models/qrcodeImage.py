from rest_framework import serializers
from base.models import QrCodeImage

class QrCodeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = QrCodeImage
        fields = '__all__'