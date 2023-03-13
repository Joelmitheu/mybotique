from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
@require_http_methods(['GET'])

# Create your views here.
def home(request):
    template=loader.get_template('index.html')
    return HttpResponse(template.render())