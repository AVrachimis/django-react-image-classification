from ..models import Image
from rest_framework import serializers


class ImageSerializer(serialisers.ModelSerializer):

    class Meta:
        mode = Image
        fields = '__all__'
        # exclude = ('field1','field2')
