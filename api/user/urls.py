from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token

from .views import registration

urlpatterns = [
    path("", registration, name="register"),
    path('login/', obtain_jwt_token),
    path('verify/', verify_jwt_token),
    path('refresh/', refresh_jwt_token),


]