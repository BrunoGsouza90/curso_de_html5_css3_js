"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyClass = void 0;
class PropertyClass {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(nome, ram, cpu, ligado = false) {
        this.fnome = nome;
        this.fligado = ligado;
        this.fram = ram;
        this.cpu = cpu;
    }
    // ==========================================================
    set fnome(nome) {
        this.nome = nome;
    }
    get fnome() {
        return this.nome;
    }
    set fram(ram) {
        this.ram = ram;
    }
    get fram() {
        return this.ram;
    }
    set fcpu(cpu) {
        this.cpu = cpu;
    }
    get fcpu() {
        return this.cpu;
    }
    set fligado(ligado) {
        this.ligado = ligado;
    }
    get fligado() {
        return this.ligado;
    }
}
exports.PropertyClass = PropertyClass;
