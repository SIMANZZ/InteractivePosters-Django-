from django.urls import path
from .views import main, rotor_and_stator_of_turbogenerator_common, rotor_and_stator_of_turbogenerator_interactive
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', main, name='main'),
    path('rotor_and_stator_of_turbogenerator_common', rotor_and_stator_of_turbogenerator_common,
         name='rotor_and_stator_of_turbogenerator_common'),
    path('rotor_and_stator_of_turbogenerator_interactive', rotor_and_stator_of_turbogenerator_interactive,
         name='rotor_and_stator_of_turbogenerator_interactive'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
