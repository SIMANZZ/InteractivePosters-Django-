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
        "image_adress": "DC_engine",
    },
    {
        "name": "Индуктор машины постоянного тока",
        "imageSrc": '../media/images/DCmachines/Индуктор машины постоянного тока.jpg',
        "image_adress": "DC_machine_inductor",
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
        "image_adress": "armature_of_the_DC_machine",
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
        "image_adress": "sync_engine_rotor",
    },
    {
        "name": "Синхронная машина",
        "imageSrc": '../media/images/ACmachines/Sync/Синхронная машина.jpg',
        "image_adress": "sync_machine",
    },
    {
        "name": "Синхронный двигатель",
        "imageSrc": '../media/images/ACmachines/Sync/Синхронный двигатель.jpg',
        "image_adress": "sync_engine",
    },
    {
        "name": "Турбогенератор",
        "imageSrc": '../media/images/ACmachines/Sync/Турбогенератор.jpg',
        "image_adress": "turbogenerator",
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
        "image_adress": "async_engine_with_phase_rotor",
    },
    {
        "name": "Короткозамкнутые роторы асинхронного двигателя",
        "imageSrc": '../media/images/ACmachines/Async/Короткозамкнутые роторы асинхронного двигателя.jpg',
        "image_adress": "short_circuited_async_engine_rotors",
    },
    {
        "name": "Статор асинхронного двигателя",
        "imageSrc": '../media/images/ACmachines/Async/Статор асинхронного двигателя.jpg',
        "image_adress": "async_engine_stator",
    },
    {
        "name": "Фазный ротор асинхронного двигателя",
        "imageSrc": '../media/images/ACmachines/Async/Фазный ротор асинхронного двигателя.jpg',
        "image_adress": "phase_rotor_of_an_async_engine",
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
        print(question_number + " " + answer + " " + machine_name)

        if machine_name is not None and question_number is not None and answer is not None:
            machine = get_object_or_404(Machines, machine_name=machine_name)
            try:
                # Пробуем преобразовать question_number в целое число
                question_number = int(question_number)
                answer_obj = Answers.objects.get(machinesID=machine, question_number=question_number)
                print(answer_obj)
                print(answer_obj.correct_answer)

                if answer_obj.correct_answer.lower() == answer.lower():
                    return JsonResponse({'message': 'success'}, status=200)
                else:
                    return JsonResponse({'message': 'failed'}, status=200)
            except Answers.DoesNotExist:
                return JsonResponse({'message': 'Invalid question number'}, status=400)
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


@csrf_exempt
def show_definition(request):
    if request.method == 'POST':
        machine_name = request.POST.get('machine_name', None)
        if machine_name is not None:
            machine = get_object_or_404(Machines, machine_name=machine_name)
            definition = machine.definition
            return JsonResponse({'definition': definition}, status=200)
        else:
            return JsonResponse({'error': 'machine_name parameter is missing'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def category_proccessing(request):
    if request.method == 'POST':
        machine_name = request.POST.get('machine_name', None)
        if machine_name:
            category = None
            for item in ACmachinesimages_dataAsync:
                if machine_name in item["name"]:
                    category = 'Async'
                    break
            if not category:
                for item in ACmachinesimages_dataSync:
                    if machine_name in item["name"]:
                        category = 'Sync'
                        break
            if not category:
                for item in DCmachinesimages_data:
                    if machine_name in item["name"]:
                        category = 'DCmachines'
                        break
            if not category:
                for item in GeneralPrincipalsimages_data:
                    if machine_name in item["name"]:
                        category = 'GeneralPrincipals'
                        break

            if category:
                request.session['category'] = category  # Сохраняем категорию в сессии
                return JsonResponse({'success': category})
            else:
                return JsonResponse({'error': 'Unknown machine name'}, status=400)
        else:
            return JsonResponse({'error': 'machine_name parameter is missing'}, status=400)

    elif request.method == 'GET':
        category = request.session.pop('category', None)  # Получаем категорию из сессии
        if category:
            return JsonResponse({'category': category}, status=200)
        else:
            return JsonResponse({'error': 'No category found in session'}, status=400)

    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
