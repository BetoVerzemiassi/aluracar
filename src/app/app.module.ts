import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EscolhaPage } from '../pages/escolha/escolha';
import { CadastroPage } from '../pages/cadastro/cadastro';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AgendamentoService } from '../domain/agendamento/agendamento-service';
import { Storage } from '@ionic/storage';//importando serviço Storage do módulo do ionic
import { AgendamentoDao } from '../domain/agendamento/agendamento-dao';

/*configuração do módulo, essa função retorna uma instância de Storage preparada para lidar com o IndexedDB, tbm indica que banco será criado de nome aluracar com a storage
agendamentos, aquela que armazenará os agendamentos realizados pelo usuário*/
function provideStorage(){
  return new Storage(['indexeddb'],{
    name: 'aluracar',
    storeName: 'agendamentos'
  });
}

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    EscolhaPage, 
    CadastroPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    EscolhaPage, 
    CadastroPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AgendamentoService,
    {provide: Storage, useFactory: provideStorage},
    AgendamentoDao
  ]
})
export class AppModule {}
