from django.conf.urls import url
from blog.views import PostListView, PostView

helper_patterns = [
    url(r'^blog/$', PostListView.as_view(), name='post'),
    url(r'^blog/(?P<pk>[0-9]+)/$', PostView.as_view(), name='get_post'),
]

urlpatterns = helper_patterns