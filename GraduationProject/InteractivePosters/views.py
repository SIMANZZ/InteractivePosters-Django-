from django.shortcuts import render
import json


def main(request):
    return render(request, 'main.html')