from rest_framework import serializers
from .models import Arthur, Book, Publisher
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'password') # '__all__' / exclude
#         extra_kwargs = {'password': {'write_only': True, 'required': True}}

    # def create(self, validated_data):
    #     user = User.objects.create_user(**validated_data)
    #     Token.objects.create(user=user)
    #     return user

class ArthurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arthur
        fields = ('id','name') # __all__

class BookSerializer(serializers.ModelSerializer):
    arthur = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Arthur.objects.all()
    )
    class Meta:
        model = Book
        fields = ('id', 'title', 'release', 'publisher','price','arthur')

class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = ('id', 'name')
