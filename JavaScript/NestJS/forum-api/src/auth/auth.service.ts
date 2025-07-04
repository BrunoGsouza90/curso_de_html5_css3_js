import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

type SignDTO = {

  email: string;
  password: string;

}

@Injectable()
export class AuthService {

    constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

    async signin(params: SignDTO): Promise<object> {

        try{
                
            let user = await this.prisma.user.findUnique({

                where: {

                    email: params.email

                }

            })

            if(user == null) {

                return {

                    status: "404",
                    mensagem: "Usuário não encontrado!"

                }

            } else {

                let passwordCompare = await bcrypt.compare(params.password, user.password)

                if(!passwordCompare) {

                    return {

                        status: "401",
                        mensagem: "Credenciais incorretas!"

                    }

                } else {

                    let {password, ...userResult } = user

                    const payload = { sub: user.id, username: user.name }

                    let token = await this.jwtService.signAsync(payload)

                    return {

                        status: "200",
                        mensagem: "Usuário logado com sucesso!",
                        userResult,
                        token: token

                    }

                }

            }

        } catch(error) {

            console.log(`${error}`)

            return {
            
              status: "500",
              mensagem: "Erro ao autenticar usuário! Contate nossa equipe!",
              error: `${error}`

            }

        }

    }

}