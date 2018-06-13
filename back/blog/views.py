from django.shortcuts import render
from django.utils import timezone
from .models import Post
from django.shortcuts import render, get_object_or_404

from .serializer import PostSerializer

from rest_framework.views import APIView
from rest_framework.response import Response

def post_list(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

class PostListView(APIView):
    serializer_class = PostSerializer

    def get(self, request, format=None):
        serializer = self.serializer_class(Post.objects.all(), many=True)
        return Response(serializer.data)

class PostView(APIView):

    def get(self, request, pk, format=None):
        user = Post.objects.get(pk=pk)
        serializer = PostSerializer(user)
        return Response(serializer.data)
