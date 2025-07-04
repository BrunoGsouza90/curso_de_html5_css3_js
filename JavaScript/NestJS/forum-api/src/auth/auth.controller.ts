import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

type SignDTO = {

  email: string;
  password: string;

}

@Controller("auth")
export class AuthController {

    constructor(private readonly AuthService: AuthService) {}

    @Post("login")
    async loginUser(
    @Body()
    data: SignDTO): Promise<object> {

        return this.AuthService.signin(data)

    }
    

}