from rest_framework import serializers

from .models import WishItem


class WishObjectListSerializer(serializers.ModelSerializer):

    class Meta:
        model = WishItem
        fields = '__all__'
