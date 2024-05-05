export function characteristicByName(){
    let rotor_and_stator_of_turbogenerator = '../media/images/ACmachines/Sync/Ротор и статор турбогенератора.svg';
    let collectors = '../media/images/ACmachines/Sync/Коллекторы.svg';

    let codeName = localStorage.getItem('svgName');
    console.log(codeName);

    let n;
    let resultName;

    switch (codeName) {
        case 'rotor_and_stator_of_turbogenerator':
            resultName = rotor_and_stator_of_turbogenerator;
            n = 22;
            break;
        case 'collectors':
            resultName = collectors;
            n = 18;
            break;
    }

    let characteristics = [n, resultName, codeName];

    return characteristics;
}