from django.db import models
from api.user.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from api.product.models import Product


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)


@receiver(post_save, sender=User)
def create_cart(sender, instance, created, **kwargs):
    if created:
        cart = Cart.objects.create(user=instance)
        cart.save()


class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)

    # unit_price = models.DecimalField(max_digits=18, decimal_places=2, verbose_name=_('unit price'))

    def __str__(self):
        return str(self.cart.user) + " - " + str(self.product)
