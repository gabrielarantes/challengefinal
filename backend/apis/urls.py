from django.conf.urls import url
from blog.views import PostListView

helper_patterns = [
    url(r'posts/$', PostListView.as_view(), name='posts'), 
]

urlpatterns = helper_patterns