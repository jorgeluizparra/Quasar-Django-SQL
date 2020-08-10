from django.shortcuts import render

from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from aviajem.models import Residencias, Media, Like
from aviajem.serializers import ResidenciasSerializer, MediaSerializer, LikeSerializer

# Create your views here.
class LikeViewSets(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['residencia']

class ResidenciasViewSets(viewsets.ModelViewSet):
    queryset = Residencias.objects.all()
    serializer_class = ResidenciasSerializer

class MediaViewSets(viewsets.ModelViewSet):
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['neighbourhood_group', 'room_type']