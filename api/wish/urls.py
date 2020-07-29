from django.urls import path
from .views import WishObjectListView

urlpatterns = [
    path('list/', WishObjectListView.as_view(), name='item-list'),
]