from django.contrib.auth.decorators import login_required # built in to check where user is logged in or not
from django.shortcuts import render

from .forms import ArticleForm
from .models import Article

# Create your views here.

def article_search_view(request):
    
    # print(request.GET)
    query_dict = request.GET # This is dictionary
    query = query_dict.get("q") # <input type="text" name="q">

    article_obj = None
    if query is not None:
       article_obj = Article.objects.get(id=query)
    content = {
        "object": article_obj,
    }
    return render(request, "articles/search.html", context = content)

@login_required # check if user is logged in or not
 
def article_create_view(request, id=None):
    # print(request.POST)
    form = ArticleForm(request.POST or None)
    context = {
        "form": form,
    }
   
    if form.is_valid():
        article_object = form.save()
        context['form'] = ArticleForm()
        # context['object'] = article_object
        # context['created'] = True

    return render(request, "articles/create.html", context = context)

def article_detail_view(request, slug=None):
    article_obj = None
    if slug is not None:
        article_obj = Article.objects.get(slug=slug)

    context = {
        "object": article_obj,
    }
    return render(request, "articles/detail.html", context = context)