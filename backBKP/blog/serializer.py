from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        depth = 1
        fields = ['id','author','category','thumb','title','text']