from rest_framework.viewsets import ModelViewSet

from .serializers import CategoriesSerializer
from .models import Categories


class CategoriesView(ModelViewSet):
    serializer_class = CategoriesSerializer
    queryset = Categories.objects.all()
