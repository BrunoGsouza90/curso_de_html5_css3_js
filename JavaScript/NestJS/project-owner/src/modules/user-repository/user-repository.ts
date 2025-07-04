import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {

    findAll(){

        return "Esse aqui é o cara que se conecta com o Banco de Dados."

    }

}
