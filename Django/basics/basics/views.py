"""
To render html web pages
"""
from django.http import HttpResponse
from django.template.loader import render_to_string
from articles.models import Article


def home_view(request, *args, **kwargs):
    """
    Take in a request
    Return HTML as a response
    """
    # Retrieving database
    article_obj = Article.objects.get(id = 2)
    article_queryset = Article.objects.all()
    my_list = [1, 2, 3, 4, 5]

    context = {
        "object_list": article_queryset,
        'my_list': my_list,
        'title': article_obj.title,
        'content': article_obj.content,
        'id': article_obj.id
    }
    # Django templates
    HTML_STRING = render_to_string('home-view.html', context = context)

    return HttpResponse(HTML_STRING)