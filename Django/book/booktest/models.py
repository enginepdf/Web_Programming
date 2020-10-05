from django.db import models

# Create your models here.

class Arthur(models.Model):
    name=models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Publisher(models.Model):
    name =  models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=200)
    price=models.IntegerField(default=0)
    release=models.DateTimeField(auto_now_add=False, blank=True, null=True)
    # arthur=models.ManyToManyField('Arthur', through='Book_Arthur', through_fields=('book','arthur'),)
    # arthur=models.ManyToManyField('Arthur', through='Book_Arthur')
    arthur=models.ManyToManyField('Arthur')
    publisher=models.ForeignKey('Publisher', on_delete=models.CASCADE)

    def __str__(self):
        return self.title


# class Book_Arthur(models.Model):
#     book=models.ForeignKey('Book', on_delete=models.CASCADE)
#     arthur=models.ForeignKey('Arthur', on_delete=models.CASCADE)
