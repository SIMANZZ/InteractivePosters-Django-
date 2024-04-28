from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
                  path('', main, name='main'),
                  path('check_answer/', check_answer, name='check_answer'),
                  path('<str:machine_name>', machines_render),
                  path('common/', common, name='common'),
                  path('test/', test, name='test'),
                  path('information/', information, name='information'),
                  path('medialibrary/', mediaLibrary, name='medialibrary')
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
