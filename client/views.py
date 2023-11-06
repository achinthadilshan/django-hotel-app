from django.shortcuts import render

# Create your views here.


def index(request):
    meta = {'title': 'title', 'type': 'website',
            'description': 'description', 'image': 'image', 'url': request.build_absolute_uri()}
    context = {'meta': meta}
    return render(request, 'index.html', context)
