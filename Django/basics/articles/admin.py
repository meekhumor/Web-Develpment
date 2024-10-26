from django.contrib import admin
from .models import Article

# Register your model
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'slug')
    search_fields = ('title', 'content')

admin.site.register(Article, ArticleAdmin)

