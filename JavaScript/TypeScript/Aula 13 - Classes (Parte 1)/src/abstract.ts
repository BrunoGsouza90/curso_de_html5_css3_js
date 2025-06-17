export abstract class PropertyClass {

    protected nome:string = ""
    protected ram:number = 0
    protected cpu:number = 0
    protected ligado:boolean = false

    public constructor(nome:string, ram:number, cpu:number, ligado:boolean = false){

        this.fnome = nome
        this.fligado = ligado
        this.fram = ram
        this.fcpu = cpu
    }

    // ==========================================================

    protected set fnome(nome:string){

        this.nome = nome

    }

    protected get fnome():string {

        return this.nome

    }

    protected set fram(ram:number){

        this.ram = ram

    }

    protected get fram(){

        return this.ram

    }

    protected set fcpu(cpu:number){

        this.cpu = cpu

    }

    protected get fcpu(){

        return this.cpu

    }

    protected set fligado(ligado:boolean){

        this.ligado = ligado

    }

    protected get fligado():boolean{

        return this.ligado

    }

}