import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../domain/carro/carro';
import { Acessorio } from '../../domain/carro/acessorio';

import { CadastroPage } from '../cadastro/cadastro';

@Component({
    templateUrl: 'escolha.html'
})

export class EscolhaPage {
 
    public carro: Carro;
    public acessorios: Acessorio[];
    private _precoTotal: number;

    constructor(public navCtrl: NavController, public navParams: NavParams){

        this.carro =  navParams.get('carroSelecionado');//aqu está enviando o dado para a página
        this._precoTotal = this.carro.preco;//o preço total começa com o preço do carro
        this.acessorios = [
            new Acessorio('Freio ABS', 800),
            new Acessorio('Ar-Condicionado', 1000),
            new Acessorio('MP3 Player', 500)           
        ];
    }

    get precoTotal(){
        return this._precoTotal;
    }

    atualizaTotal(ligado: boolean, acessorio){
        ligado ?
            this._precoTotal += acessorio.preco :
            this._precoTotal -= acessorio.preco;
    }

    avancaNoAgendamento(){
        this.navCtrl.push(CadastroPage, {
            carro: this.carro,
            precoTotal: this._precoTotal
        });
    }
}