from rest_framework import serializers
from aviajem.models import Residencias, Media

class ResidenciasSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Residencias
        fields = ['id', 'name', 'host_id', 'host_name', 'neighbourhood', 'latitude', 'longitude', 'room_type', 'price', 'minimum_nights', 'number_of_reviews', 'last_review', 'reviews_per_month', 'calculated_host_listings_count', 'availability_365', 'neighbourhood_group']

class MediaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Media
        fields = ['id', 'neighbourhood_group', 'room_type', 'price']