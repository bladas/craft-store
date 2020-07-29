from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CartObjectListSerializer
from .models import CartItem, Cart


class CartObjectListView(APIView):
    serializer_class = CartObjectListSerializer
    # permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        pass

    def get(self, request, format=None):
        # user = self.request.user
        cart = Cart.objects.filter()[0]#user=user
        products_in_cart = CartItem.objects.filter(cart=cart)
        serializer = CartObjectListSerializer(products_in_cart, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CartObjectListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)