/*
DAO Data-acces Object
Centralizados todas as operações de persistência dos nossos agendamentos
*/
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Agendamento } from '../../domain/agendamento/agendamento';

@Injectable()
export class AgendamentoDao {

    constructor(private _storage: Storage) {

    }

    salva(agendamento: Agendamento) {
        let key = this._getKey(agendamento);
        return this._storage.set(key, agendamento);
    }  

    ehAgendamentoDuplicado(agendamento: Agendamento) {
        let key = this._getKey(agendamento);

        return this._storage
            .get(key)
            .then(dado => {
                return dado ? true : false;
            });
    }


}