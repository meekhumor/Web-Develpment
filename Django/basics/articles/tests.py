from django.test import TestCase
from django.utils.text import slugify

# Create your tests here.
from .models import Article
from.utils import slugify_instance_title

class ArticleTestCase(TestCase):

    def test_queryset_exists(self):
        qs = Article.objects.all()
        self.assertTrue(qs.exists())

    def test_hello_world_slug(self):
        obj = Article.objects.all().order_by("id").first()
        slug = obj.slug
        self.assertEqual(slug, "hello-world")
