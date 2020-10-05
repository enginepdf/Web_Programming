from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import ArthurViewSet, BookViewSet, PublisherViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('arthur', ArthurViewSet)
router.register('book', BookViewSet)
router.register('publisher', PublisherViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
