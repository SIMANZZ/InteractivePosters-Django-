class Flags {
    constructor() {
        this.ACmachines_Sync = false;
        this.ACmachines_Async = false;
        this.DCmachines = false;
        this.GeneralPrincipals = false;
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
}

export let flags = new Flags();