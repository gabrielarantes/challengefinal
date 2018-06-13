from django.shortcuts import render
from .models import Post

from .serializer import PostSerializer

from rest_framework.response import Response
from rest_framework.views import APIView


def post_list(request):
    post = Post.objects.all()
    context = {'post': post}

    return render(request, 'blog/post_list.html', {})

class PostListView(APIView):
    serializer_class = PostSerializer

    def get(self, request, format=None):
        serializer = self.serializer_class(Post.objects.all(), many=True)
        return Response(serializer.data)
        
