import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Carro } from '../../domain/carro/carro';
// import { Http } from '@angular/http';//importando o serviço HTTP para realizar requisições para a API do cliente
import { AgendamentoService } from '../../domain/agendamento/agendamento-service';
import { HomePage } from '../home/home';
import { Agendamento } from '../../domain/agendamento/agendamento';
import { AgendamentoDao } from '../../domain/agendamento/agendamento-dao';

@Component({  
    templateUrl: 'cadastro.html'
})
export class CadastroPage {
    
    //propriedades
    public carro: Carro;
    public precoTotal: number;    
    public agendamento: Agendamento;
    private _alerta: Alert;
    
    //só faz sentido Http ser usado pelo próprio CadastroPage, por isso o modificador private foi usado
    //instância dos itens importados
    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private _service: AgendamentoService,
        private _alertCtrl: AlertController,
        private _dao: AgendamentoDao) {
            
            this.carro = this.navParams.get('carro');
            this.precoTotal = this.navParams.get('precoTotal');            
            this.agendamento = new Agendamento(this.carro, this.precoTotal);
            
            this._alerta = this._alertCtrl.create({
                title: 'Aviso',
                buttons: [{ text: 'OK', handler: () => this.navCtrl.setRoot(HomePage) }]
            });
        }
        
        agenda(){    
            //verificando se os campos estão preenchidos
            if(!this.agendamento.nome || !this.agendamento.endereco || !this.agendamento.email){
                this._alertCtrl.create({
                    title: 'Preenchimento Obrigatório',
                    subTitle: 'Você deve preencher todas as informações',
                    buttons: [{ text: 'OK' }]
                }).present();
                
                return;
            }  
          this._service.agenda(this.agendamento)
            .then(confirmado => {
                confirmado ?
                    this._alerta.setSubTitle('Agendamento realizado com sucesso.') :
                    this._alerta.setSubTitle('Não foi possível realizar o agendamento!');
                    this._alerta.present();
            })
            .catch(err => {
                this._alerta.setSubTitle(err.message);
                this._alerta.present();
            });           
        }
        
    }