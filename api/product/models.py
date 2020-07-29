from django.db import models
from api.categories.models import Categories


class Product(models.Model):
    name = models.CharField(max_length=50)
    desc = models.TextField()
    price = models.PositiveIntegerField()
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)

    def __str__(self):
        return self.name