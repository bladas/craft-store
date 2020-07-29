from django.contrib.auth import get_user_model
from rest_framework import response, decorators, permissions, status


from .serializers import UserCreateSerializer, UserSerializer

User = get_user_model()


@decorators.api_view(["POST"])
@decorators.permission_classes([permissions.AllowAny])
def registration(request):
    serializer = UserCreateSerializer(data=request.data)
    if not serializer.is_valid():
        return response.Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
    user = serializer.save()

    return response.Response(status.HTTP_201_CREATED)
