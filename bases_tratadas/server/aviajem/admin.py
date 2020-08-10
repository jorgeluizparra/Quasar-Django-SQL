from django.contrib import admin

# Register your models here.
from aviajem.models import Residencias, Media, Like

admin.site.register(Residencias)
admin.site.register(Media)
admin.site.register(Like)