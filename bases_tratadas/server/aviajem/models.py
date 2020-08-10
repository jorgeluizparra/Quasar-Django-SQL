from django.db import models

# Create your models here.
class Residencias(models.Model):
    name = models.CharField(max_length=500)
    host_id = models.FloatField()
    host_name = models.CharField(max_length=500)
    neighbourhood = models.CharField(max_length=500)
    latitude = models.FloatField()
    longitude = models.FloatField()
    room_type = models.CharField(max_length=500)
    price  = models.FloatField()
    minimum_nights = models.FloatField()
    number_of_reviews = models.FloatField()
    last_review = models.DateTimeField(auto_now=False, auto_now_add=False)
    reviews_per_month  = models.FloatField()
    calculated_host_listings_count = models.FloatField()
    availability_365 = models.FloatField()
    neighbourhood_group = models.CharField(max_length=500)\

    def __str__(self):
        return self.name

class Media(models.Model):

    neighbourhood_group = models.CharField(max_length=500)
    room_type = models.CharField(max_length=500)
    price = models.FloatField()

    def __str__(self):
        return self.neighbourhood_group
