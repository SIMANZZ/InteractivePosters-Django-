from django.shortcuts import render
import json


def main(request):
    GeneralPrincipalsimages_data = [
        {
            "name": "Крепление электрических машин",
            "imageSrc": 'images/GeneralPrincipals/Крепление электрических машин.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Охлаждение электрических машин",
            "imageSrc": 'images/GeneralPrincipals/Охлаждение электрических машин.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Преобразование энергии в электрическом генераторе",
            "imageSrc": 'images/GeneralPrincipals/Преобразование энергии в электрическом генераторе.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Преобразование энергии в электродвигателе",
            "imageSrc": 'images/GeneralPrincipals/Преобразование энергии в электродвигателе.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
    ]

    DCmachinesimages_data = [
        {
            "name": "Двигатель постоянного тока",
            "imageSrc": 'images/DCmachines/Двигатель постоянного тока.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Индуктор машины постоянного тока",
            "imageSrc": 'images/DCmachines/Индуктор машины постоянного тока.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Коммутация якоря",
            "imageSrc": 'images/DCmachines/Коммутация якоря.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Реакция якоря",
            "imageSrc": 'images/DCmachines/Реакция якоря.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "ЭДС, электромагнитный момент",
            "imageSrc": 'images/DCmachines/ЭДС, электромагнитный момент.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Якорь машины постоянного тока",
            "imageSrc": 'images/DCmachines/Якорь машины постоянного тока.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
    ]

    ACmachinesimages_dataSync = [
        {
            "name": "Коллекторы",
            "imageSrc": 'images/ACmachines/Sync/Коллекторы.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",

        },
        {
            "name": "Ротор и статор турбогенератора",
            "imageSrc": 'images/ACmachines/Sync/Ротор и статор турбогенератора.jpg',
            "imageCommon_adress": 'rotor_and_stator_of_turbogenerator_common',
            "imageInteractive_adress": 'rotor_and_stator_of_turbogenerator_interactive',
            "trainingButton_adress": 'rotor_and_stator_of_turbogenerator_test',
            "examButton_adress": 'none',
        },
        {
            "name": "Ротор синхронного двигателя",
            "imageSrc": 'images/ACmachines/Sync/Ротор синхронного двигателя.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Синхронная машина",
            "imageSrc": 'images/ACmachines/Sync/Синхронная машина.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Синхронный двигатель",
            "imageSrc": 'images/ACmachines/Sync/Синхронный двигатель.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Турбогенератор",
            "imageSrc": 'images/ACmachines/Sync/Турбогенератор.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
    ]

    ACmachinesimages_dataAsync = [
        {
            "name": "Асинхронный двигатель с короткозамкнутым ротором",
            "imageSrc": 'images/ACmachines/Async/Асинхронный двигатель с короткозамкнутым ротором.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Асинхронный двигатель с фазным ротором",
            "imageSrc": 'images/ACmachines/Async/Асинхронный двигатель с фазным ротором.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Короткозамкнутые роторы асинхронного двигателя",
            "imageSrc": 'images/ACmachines/Async/Короткозамкнутые роторы асинхронного двигателя.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Статор асинхронного двигателя",
            "imageSrc": 'images/ACmachines/Async/Статор асинхронного двигателя.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
        },
        {
            "name": "Фазный ротор асинхронного двигателя",
            "imageSrc": 'images/ACmachines/Async/Фазный ротор асинхронного двигателя.jpg',
            "imageCommon_adress": "none",
            "imageInteractive_adress": "none",
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


def rotor_and_stator_of_turbogenerator_common(request):
    return render(request, 'rotor_and_stator_of_turbogenerator_common.html')


def rotor_and_stator_of_turbogenerator_interactive(request):
    return render(request, 'rotor_and_stator_of_turbogenerator_interactive.html')

def rotor_and_stator_of_turbogenerator_test(request):
    return render(request, 'rotor_and_stator_of_turbogenerator_test.html')
