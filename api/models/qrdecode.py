from rest_framework import serializers
from base.models import QrDecode

class QrdecodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QrDecode
        fields = ['link', 'created']
