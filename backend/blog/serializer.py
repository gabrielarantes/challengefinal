from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        depth = 1
        fields = ['id','author','thumb','category','title','text','created_date','published_date']