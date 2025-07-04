import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user-repository/user-repository';

@Injectable()
export class UserService {

    constructor(private UserRepository: UserRepository){}

    findAll(): string {

        return this.UserRepository.findAll();

    }

}
