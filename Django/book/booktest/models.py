from django.db import models

# Create your models here.

class Arthur(models.Model):
    name =  models.CharField(max_length=200)


class Book(models.Model):
    id=models.ManyToManyField(Arthur, on_delete=models.CASCADE, primary_key=True)
    title = models.CharField(max_length=200)
    release=models.DateTimeField(auto_now_add=True)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)


class Publisher(models.Model):
    name =  models.CharField(max_length=200)
