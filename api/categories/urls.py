from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoriesView

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'', CategoriesView)

urlpatterns = [
    path('', include(router.urls)),
]