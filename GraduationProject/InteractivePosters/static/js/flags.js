class Flags {
    constructor() {
        this.ACmachines_Sync = false;
        this.ACmachines_Async = false;
        this.DCmachines = false;
        this.GeneralPrincipals = false;
        this.training = false;
        this.control = false;
    }

    setACmachines_Sync(value) {
        this.ACmachines_Sync = value;
    }

    setACmachines_Async(value) {
        this.ACmachines_Async = value;
    }

    setDCmachines(value) {
        this.DCmachines = value;
    }

    setGeneralPrincipals(value) {
        this.GeneralPrincipals = value;
    }

    getACmachines_Sync() {
        return this.ACmachines_Sync;
    }

    getACmachines_Async() {
        return this.ACmachines_Async;
    }
    getDCmachines() {
        return this.DCmachines;
    }

    getGeneralPrincipals() {
        return this.GeneralPrincipals;
    }

    setTraining(value){
        this.training = value;
    }

    setControl(value){
        this.control = value;
    }
    
    getMode(){
        if(this.training){
            return this.training;
        }
        else{
            return this.control+"всмысле";
        }
    }
}

export let flags = new Flags();