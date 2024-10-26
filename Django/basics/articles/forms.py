from django import forms
from .models import Article

class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ['title', 'content']

    def clean(self):
        data = self.cleaned_data
        title = data.get('title')
        qs = Article.objects.all().filter(title__icontains=title)

        if qs.exists():
            self.add_error('title', f'{title} already exists')
        return data


# Old way of doing it
# class ArticleFormOld(forms.Form):
#     title = forms.CharField()
#     content = forms.CharField()

#     def clean(self):
#         cleaned_data = self.cleaned_data
#         title = cleaned_data.get('title')
#         content = cleaned_data.get('content')
#         if title.lower().strip() == 'the office':
#             self.add_error('title', 'The office is not a good title')
#         if 'office' in content:
#             self.add_error('content', 'The office cannot be in content')
        
#         return cleaned_data