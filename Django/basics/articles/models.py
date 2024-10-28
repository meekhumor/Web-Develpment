from django.db import models
from django.db.models.signals import pre_save, post_save
from django.utils.text import slugify
import random

from .utils import slugify_instance_title
from django.urls import reverse

# Create your models here.
class Article (models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(blank=True, null=True)
    content = models.TextField()

    def get_absolute_url(self):
        return reverse('article-detail', kwargs={'slug': self.slug})

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


def article_pre_save(sender, instance, *args, **kwargs):
    # print('pre_save')
    if instance.slug is None:
        slugify_instance_title(instance, save=False)

pre_save.connect(article_pre_save, sender=Article)


def article_post_save(sender, instance, created, *args, **kwargs):
    # print('post_save')
    if created:
        slugify_instance_title(instance, save=True)

post_save.connect(article_post_save, sender=Article)

