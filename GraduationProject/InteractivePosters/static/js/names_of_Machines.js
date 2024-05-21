export function characteristicByName(){
    let rotor_and_stator_of_turbogenerator = '../media/images/ACmachines/Sync/Ротор и статор турбогенератора.svg';
    let collectors = '../media/images/ACmachines/Sync/Коллекторы.svg';
    let async_engine_with_short_circuited_rotor = '../media/images/ACmachines/Async/Асинхронный двигатель с короткозамкнутым ротором.svg';
    let async_engine_with_phase_rotor = '../media/images/ACmachines/Async/Асинхронный двигатель с фазным ротором.svg';
    let short_circuited_async_engine_rotors = '../media/images/ACmachines/Async/Короткозамкнутые роторы асинхронного двигателя.svg';
    let async_engine_stator = '../media/images/ACmachines/Async/Статор асинхронного двигателя.svg';
    let phase_rotor_of_an_async_engine = '../media/images/ACmachines/Async/Фазный ротор асинхронного двигателя.svg';
    let sync_engine_rotor = '../media/images/ACmachines/Sync/Ротор синхронного двигателя.svg';
    let sync_machine = '../media/images/ACmachines/Sync/Синхронная машина.svg';
    let sync_engine = '../media/images/ACmachines/Sync/Синхронный двигатель.svg';
    let turbogenerator = '../media/images/ACmachines/Sync/Турбогенератор.svg';
    let DC_engine = '../media/images/DCmachines/Двигатель постоянного тока.svg';
    let DC_machine_inductor = '../media/images/DCmachines/Индуктор машины постоянного тока.svg';
    let armature_of_the_DC_machine = '../media/images/DCmachines/Якорь машины постоянного тока.svg';

    let codeName = localStorage.getItem('svgName');
    console.log(codeName);

    let n;
    let resultName;

    switch (codeName) {
        case 'rotor_and_stator_of_turbogenerator':
            resultName = rotor_and_stator_of_turbogenerator;
            n = 21;
            break;
        case 'collectors':
            resultName = collectors;
            n = 19;
            break;
        case 'async_engine_with_short_circuited_rotor':
            resultName = async_engine_with_short_circuited_rotor;
            n = 26;
            break;
        case 'async_engine_with_phase_rotor':
            resultName = async_engine_with_phase_rotor;
            n = 24;
            break;
        case 'short_circuited_async_engine_rotors':
            resultName = short_circuited_async_engine_rotors;
            n = 6;
            break;
        case 'async_engine_stator':
            resultName = async_engine_stator;
            n = 17;
            break;
        case 'phase_rotor_of_an_async_engine':
            resultName = phase_rotor_of_an_async_engine;
            n = 34;
            break;
        case 'sync_engine_rotor':
            resultName = sync_engine_rotor;
            n = 14;
            break;
        case 'sync_machine':
            resultName = sync_machine;
            n = 16;
            break;
        case 'sync_engine':
            resultName = sync_engine;
            n = 16;
            break;
        case 'turbogenerator':
            resultName = turbogenerator;
            n = 20;
            break;
        case 'DC_engine':
            resultName = DC_engine;
            n = 19;
            break;
        case 'DC_machine_inductor':
            resultName = DC_machine_inductor;
            n = 12;
            break;
        case 'armature_of_the_DC_machine':
            resultName = armature_of_the_DC_machine;
            n = 19;
            break;
    }

    let characteristics = [n, resultName, codeName];

    return characteristics;
}