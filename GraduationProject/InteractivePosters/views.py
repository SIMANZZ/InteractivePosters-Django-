from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Answers, Machines
import json


def main(request):
    GeneralPrincipalsimages_data = [
        {
            "name": "Крепление электрических машин",
            "imageSrc": 'images/GeneralPrincipals/Крепление электрических машин.jpg',
            "image_adress": "none",
        },
        {
            "name": "Охлаждение электрических машин",
            "imageSrc": 'images/GeneralPrincipals/Охлаждение электрических машин.jpg',
            "image_adress": "none",
        },
        {
            "name": "Преобразование энергии в электрическом генераторе",
            "imageSrc": 'images/GeneralPrincipals/Преобразование энергии в электрическом генераторе.jpg',
            "image_adress": "none",
        },
        {
            "name": "Преобразование энергии в электродвигателе",
            "imageSrc": 'images/GeneralPrincipals/Преобразование энергии в электродвигателе.jpg',
            "image_adress": "none",
        },
    ]

    DCmachinesimages_data = [
        {
            "name": "Двигатель постоянного тока",
            "imageSrc": 'images/DCmachines/Двигатель постоянного тока.jpg',
            "image_adress": "none",
        },
        {
            "name": "Индуктор машины постоянного тока",
            "imageSrc": 'images/DCmachines/Индуктор машины постоянного тока.jpg',
            "image_adress": "none",
        },
        {
            "name": "Коммутация якоря",
            "imageSrc": 'images/DCmachines/Коммутация якоря.jpg',
            "image_adress": "none",
        },
        {
            "name": "Реакция якоря",
            "imageSrc": 'images/DCmachines/Реакция якоря.jpg',
            "image_adress": "none",
        },
        {
            "name": "ЭДС, электромагнитный момент",
            "imageSrc": 'images/DCmachines/ЭДС, электромагнитный момент.jpg',
            "image_adress": "none",
        },
        {
            "name": "Якорь машины постоянного тока",
            "imageSrc": 'images/DCmachines/Якорь машины постоянного тока.jpg',
            "image_adress": "none",
        },
    ]

    ACmachinesimages_dataSync = [
        {
            "name": "Коллекторы",
            "imageSrc": 'images/ACmachines/Sync/Коллекторы.jpg',
            "image_adress": "collectors",
        },
        {
            "name": "Ротор и статор турбогенератора",
            "imageSrc": 'images/ACmachines/Sync/Ротор и статор турбогенератора.jpg',
            "image_adress": 'rotor_and_stator_of_turbogenerator',
        },
        {
            "name": "Ротор синхронного двигателя",
            "imageSrc": 'images/ACmachines/Sync/Ротор синхронного двигателя.jpg',
            "image_adress": "none",
        },
        {
            "name": "Синхронная машина",
            "imageSrc": 'images/ACmachines/Sync/Синхронная машина.jpg',
            "image_adress": "none",
        },
        {
            "name": "Синхронный двигатель",
            "imageSrc": 'images/ACmachines/Sync/Синхронный двигатель.jpg',
            "image_adress": "none",
        },
        {
            "name": "Турбогенератор",
            "imageSrc": 'images/ACmachines/Sync/Турбогенератор.jpg',
            "image_adress": "none",
        },
    ]

    ACmachinesimages_dataAsync = [
        {
            "name": "Асинхронный двигатель с короткозамкнутым ротором",
            "imageSrc": 'images/ACmachines/Async/Асинхронный двигатель с короткозамкнутым ротором.jpg',
            "image_adress": "none",
        },
        {
            "name": "Асинхронный двигатель с фазным ротором",
            "imageSrc": 'images/ACmachines/Async/Асинхронный двигатель с фазным ротором.jpg',
            "image_adress": "none",
        },
        {
            "name": "Короткозамкнутые роторы асинхронного двигателя",
            "imageSrc": 'images/ACmachines/Async/Короткозамкнутые роторы асинхронного двигателя.jpg',
            "image_adress": "none",
        },
        {
            "name": "Статор асинхронного двигателя",
            "imageSrc": 'images/ACmachines/Async/Статор асинхронного двигателя.jpg',
            "image_adress": "none",
        },
        {
            "name": "Фазный ротор асинхронного двигателя",
            "imageSrc": 'images/ACmachines/Async/Фазный ротор асинхронного двигателя.jpg',
            "image_adress": "none",
        },
    ]

    # Преобразование данных в формат JSON
    GeneralPrincipalsimages_json = json.dumps(GeneralPrincipalsimages_data)
    DCmachinesimages_json = json.dumps(DCmachinesimages_data)
    ACmachinesimages_jsonAsync = json.dumps(ACmachinesimages_dataAsync)
    ACmachinesimages_jsonSync = json.dumps(ACmachinesimages_dataSync)

    return render(request, 'main.html', {'GeneralPrincipalsImagesData': GeneralPrincipalsimages_json,
                                         'DCmachinesImagesData': DCmachinesimages_json,
                                         'ACmachinesImagesDataAsync': ACmachinesimages_jsonAsync,
                                         'ACmachinesImagesDataSync': ACmachinesimages_jsonSync})


def machines_render(request, machine_name):
    return render(request, machine_name + '.html')


def test(request):
    return render(request, 'test.html')


def common(request):
    return render(request, 'common.html')

def information(request):
    return render(request, 'information.html')

def mediaLibrary(request):
    return render(request, 'medialibrary.html')

@csrf_exempt
def check_answer(request):
    if request.method == 'POST':
        machine_name = request.POST.get('machine_name', None)
        question_number = request.POST.get('question_number', None)
        answer = request.POST.get('answer', None)
        mode = request.POST.get('mode', None)

        if machine_name is not None and question_number is not None and answer is not None:
            machine = get_object_or_404(Machines, machine_name=machine_name)
            answers = Answers.objects.filter(machinesID=machine)
            # Далее ваша логика сравнения ответа и т.д.
            # Например:
            try:
                answer_obj = answers[int(question_number) - 1]
                if answer_obj.correct_answer == answer:
                    return JsonResponse({'message': 'success'}, status=200)
                else:
                    return JsonResponse({'message': 'failed'}, status=200)
            except (IndexError, ValueError):
                return JsonResponse({'message': 'Invalid question number'}, status=400)
        else:
            return JsonResponse({'message': 'Missing parameters'}, status=400)
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=405)
