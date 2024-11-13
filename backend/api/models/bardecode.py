from rest_framework import serializers
from base.models import BarDecode

class BardecodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BarDecode
        fields = ['numberString', 'created']
