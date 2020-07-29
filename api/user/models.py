from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    username = models.CharField(max_length=50,unique=True)
    email = models.EmailField(_('email address'), unique=True)
    phone = models.CharField(max_length=15)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'phone']
#phone does not required field
    def __str__(self):
        return "{}".format(self.email)
