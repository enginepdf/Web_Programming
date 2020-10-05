from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from .models import Arthur, Book, Publisher
from .serializers import ArthurSerializer, BookSerializer, PublisherSerializer, UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

class ArthurViewSet(viewsets.ModelViewSet):
    queryset = Arthur.objects.all()
    serializer_class = ArthurSerializer
    authentication_classes = (TokenAuthentication, )  # for Django notice token which is sent to server
    permission_classes = (AllowAny,)



class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (AllowAny,)

    @action(detail=True, methods=['POST']) # detail=True means specific id is required
    def register(self, request, pk=None): # default pk value is None
        if 'title' in request.data:

            title=request.data['title']
            release=request.data['release']
            publisher=request.data['publisher']

            try:
                data = Arthur.objects.get(title=title) # if already exists
                data.title=title
                data.release=release
                data.publisher=publisher

                data.save()
                serializer = BookSerializer(data, many=False)
                response = {'message': 'Book updated', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            except:
                data = Book.objects.create(title=title, release=release, publisher=publisher)
                serializer = BookSerializer(data, many=False)
                response = {'message': 'Book created', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
         # **{k: request.get(k) for k in ('title', 'arthur', ... )}
         # Book._meta.get_fields()  all field names
        else:
            response = {'message': 'Book update/create error occurred'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class PublisherViewSet(viewsets.ModelViewSet):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated,)
