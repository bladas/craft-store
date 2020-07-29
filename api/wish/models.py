from django.db import models
from api.user.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from api.product.models import Product


class Wish(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)


@receiver(post_save, sender=User)
def create_wish(sender, instance, created, **kwargs):
    if created:
        wish = Wish.objects.create(user=instance)
        wish.save()


class WishItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    wish = models.ForeignKey(Wish, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.wish.user) + " - " + str(self.product)
