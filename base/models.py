from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    
class Barcode(models.Model):
    image = models.CharField(max_length=100) 
    created = models.DateTimeField(auto_now_add=True)
    
class Qrcode(models.Model):
    image = models.CharField(max_length=100) 
    created = models.DateTimeField(auto_now_add=True)

class BarDecode(models.Model):
    numberString = models.CharField(max_length=100) 
    created = models.DateTimeField(auto_now_add=True)
    
class QrDecode(models.Model):
    link = models.CharField(max_length=100) 
    created = models.DateTimeField(auto_now_add=True)

class BarCodeImage(models.Model):
    image = models.ImageField(upload_to='barcode/', blank=True, null=True)

class QrCodeImage(models.Model):
    image = models.ImageField(upload_to='qrcode/', blank=True, null=True)
