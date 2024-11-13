from rest_framework import serializers
from base.models import Qrcode

class QrcodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Qrcode
        fields = ['image', 'created']
