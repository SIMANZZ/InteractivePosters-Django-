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
                  path('medialibrary/', mediaLibrary, name='medialibrary'),
                  path('glossary/', glossary, name='glossary'),
                  path('check_symbol/', check_symbol, name='check_symbol'),
                  path('show_definition/', show_definition, name='show_definition'),
                  path('category_proccessing/', category_proccessing, name='category_proccessing'),
                  path('show_modalText/', show_modalText, name='show_modalText')
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
