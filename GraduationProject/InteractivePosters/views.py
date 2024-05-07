from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Answers, Machines
import json

GeneralPrincipalsimages_data = [
    {
        "name": "Крепление электрических машин",
        "imageSrc": '../media/images/GeneralPrincipals/Крепление электрических машин.jpg',
        "image_adress": "none",
    },
    {
        "name": "Охлаждение электрических машин",
        "imageSrc": '../media/images/GeneralPrincipals/Охлаждение электрических машин.jpg',
        "image_adress": "none",
    },
    {
        "name": "Преобразование энергии в электрическом генераторе",
        "imageSrc": '../media/images/GeneralPrincipals/Преобразование энергии в электрическом генераторе.jpg',
        "image_adress": "none",
    },
    {
        "name": "Преобразование энергии в электродвигателе",
        "imageSrc": '../media/images/GeneralPrincipals/Преобразование энергии в электродвигателе.jpg',
        "image_adress": "none",
    },
]

DCmachinesimages_data = [
    {
        "name": "Двигатель постоянного тока",
        "imageSrc": '../media/images/DCmachines/Двигатель постоянного тока.jpg',
        "image_adress": "none",
    },
    {
        "name": "Индуктор машины постоянного тока",
        "imageSrc": '../media/images/DCmachines/Индуктор машины постоянного тока.jpg',
        "image_adress": "none",
    },
    {
        "name": "Коммутация якоря",
        "imageSrc": '../media/images/DCmachines/Коммутация якоря.jpg',
        "image_adress": "none",
    },
    {
        "name": "Реакция якоря",
        "imageSrc": '../media/images/DCmachines/Реакция якоря.jpg',
        "image_adress": "none",
    },
    {
        "name": "ЭДС, электромагнитный момент",
        "imageSrc": '../media/images/DCmachines/ЭДС, электромагнитный момент.jpg',
        "image_adress": "none",
    },
    {
        "name": "Якорь машины постоянного тока",
        "imageSrc": '../media/images/DCmachines/Якорь машины постоянного тока.jpg',
        "image_adress": "none",
    },
]

ACmachinesimages_dataSync = [
    {
        "name": "Коллекторы",
        "imageSrc": '../media/images/ACmachines/Sync/Коллекторы.jpg',
        "image_adress": "collectors",
    },
    {
        "name": "Ротор и статор турбогенератора",
        "imageSrc": '../media/images/ACmachines/Sync/Ротор и статор турбогенератора.jpg',
        "image_adress": 'rotor_and_stator_of_turbogenerator',
    },
    {
        "name": "Ротор синхронного двигателя",
        "imageSrc": '../media/images/ACmachines/Sync/Ротор синхронного двигателя.jpg',
        "image_adress": "none",
    },
    {
        "name": "Синхронная машина",
        "imageSrc": '../media/images/ACmachines/Sync/Синхронная машина.jpg',
        "image_adress": "none",
    },
    {
        "name": "Синхронный двигатель",
        "imageSrc": '../media/images/ACmachines/Sync/Синхронный двигатель.jpg',
        "image_adress": "none",
    },
    {
        "name": "Турбогенератор",
        "imageSrc": '../media/images/ACmachines/Sync/Турбогенератор.jpg',
        "image_adress": "none",
    },
]

ACmachinesimages_dataAsync = [
    {
        "name": "Асинхронный двигатель с короткозамкнутым ротором",
        "imageSrc": '../media/images/ACmachines/Async/Асинхронный двигатель с короткозамкнутым ротором.jpg',
        "image_adress": "async_engine_with_short_circuited_rotor",
    },
    {
        "name": "Асинхронный двигатель с фазным ротором",
        "imageSrc": '../media/images/ACmachines/Async/Асинхронный двигатель с фазным ротором.jpg',
        "image_adress": "none",
    },
    {
        "name": "Короткозамкнутые роторы асинхронного двигателя",
        "imageSrc": '../media/images/ACmachines/Async/Короткозамкнутые роторы асинхронного двигателя.jpg',
        "image_adress": "none",
    },
    {
        "name": "Статор асинхронного двигателя",
        "imageSrc": '../media/images/ACmachines/Async/Статор асинхронного двигателя.jpg',
        "image_adress": "none",
    },
    {
        "name": "Фазный ротор асинхронного двигателя",
        "imageSrc": '../media/images/ACmachines/Async/Фазный ротор асинхронного двигателя.jpg',
        "image_adress": "none",
    },
]


def main(request):
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


def glossary(request):
    return render(request, 'glossary.html')


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

@csrf_exempt
def check_symbol(request):
    if request.method == 'POST':
        # Определяем букву, с которой должны начинаться названия
        target_letter = request.POST.get('target_letter', None)
        print(target_letter)

        # Фильтруем список словарей
        filtered_data = []
        # filtered_data = [item for item in ACmachinesimages_dataAsync if item["name"].startswith(target_letter)]
        for data_array in [ACmachinesimages_dataAsync, ACmachinesimages_dataSync, DCmachinesimages_data,
                           GeneralPrincipalsimages_data]:
            filtered_data += [item for item in data_array if item["name"].startswith(target_letter)]

        # Выводим результат
        return JsonResponse(filtered_data, status=200, safe=False)
