from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import WishObjectListSerializer
from .models import WishItem, Wish


class WishObjectListView(APIView):
    serializer_class = WishObjectListSerializer
    # permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        pass

    def get(self, request, format=None):
        # user = self.request.user
        wish = Wish.objects.filter()[0]#user=user
        products_in_wish = WishItem.objects.filter(wish=wish)
        serializer = WishObjectListSerializer(products_in_wish, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = WishObjectListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)