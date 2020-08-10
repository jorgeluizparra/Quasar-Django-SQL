from django.shortcuts import render

from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from aviajem.models import Residencias, Media
from aviajem.serializers import ResidenciasSerializer, MediaSerializer

# Create your views here.
class ResidenciasViewSets(viewsets.ModelViewSet):
    queryset = Residencias.objects.all()
    serializer_class = ResidenciasSerializer

class MediaViewSets(viewsets.ModelViewSet):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['neighbourhood_group', 'room_type']