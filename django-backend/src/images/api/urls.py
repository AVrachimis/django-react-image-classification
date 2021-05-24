from .views import ImageViewSet
from rest_framework import routers
from django.urls import path, include

app name = 'api-images'

router = routers.DefaultRouter()
router.register(r'images', ImagesViewSet)

urlpatterns = [
    path('', include(router.urls))

]
