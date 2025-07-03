import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    @Inject()
    private readonly prisma: PrismaService;

    async findAllUsers() {

      let users = await this.prisma.user.findMany()

      if(users.length == 0) {

        return {

          status: "204",
          mensagem: "Nenhum usuário cadastrado!"

        }

      } else {

        return {

          status: "200",
          mensagem: "Usuários encontrados com sucesso!",
          users

        }

      }

    }

    async findUniqueUser(data: Prisma.UserWhereUniqueInput
    ): Promise<object> {

        try {

          let user = await this.prisma.user.findUnique({

            where: data,

          })

          if(user != null) {

            return {

              status: "200",
              mensagem: "Usuário encontrado com sucesso!",
              user

            }

          } else {

            return {
            
              status: "404",
              mensagem: "Esse usuário não existe!"

            }

          }

          } catch(error) {

            console.log(`${error}`)

            return {
            
              status: "500",
              mensagem: "Erro ao criar usuário! Contate nossa equipe!",
              error: `${error}`

            }

          }

    }

    async createUser(data: Prisma.UserCreateInput) {

      try {

        const hashPassword = await bcrypt.hash(data.password, 10);

        let user = await this.prisma.user.findUnique({
          
          where: {
            
            email: data.email

          }
        
        })

        if(user != null) {

          return {

            status: "409",
            mensagem: "Esse usuário já existe. Conflito na criação!"

          };

        } else {

          user = await this.prisma.user.create(

            {
              
              data: {
                
                ...data,
                password: hashPassword 
              
              }
          
            }
      
          )

          return {

            status: "201",
            mensagem: "Usuário criado com sucesso!",
            user

          }

        }

      } catch(error) {

        console.log(`Erro ao criar usuário! ${error}`)
        
        return {

          status: "500",
          mensagem: "Erro ao criar usuário! Contate nossa equipe!",
          error: `${error}`

        }

      }

    }

    async updateUser(params: {

        where: Prisma.UserWhereUniqueInput
        
        data: Prisma.UserUpdateInput

    }): Promise<object> {

    try {

      const { where, data } = params

      let user = await this.prisma.user.findUnique({

        where

      });

      if(user != null) {

        let userafter = user

        user = await this.prisma.user.update({

          data,
          where

        })
        
        return {

          status: "200",
          mensagem: "Usuário atualizado com sucesso!",
          userafter: userafter,
          userbefore: user

        }

      } else {

        return {

          status: "404",
          mensage: "Esse usuário não existe!"

        }

      }

    } catch(error) {

        console.log(`${error}`)
        
        return {

          status: "500",
          mensagem: "Erro ao criar usuário! Contate nossa equipe!",
          error: `${error}`

        }

    }

  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<object> {

    try {

      let user = await this.prisma.user.findUnique({

        where

      })

      if(user == null) {

        return {

          status: "404",
          mensage: "Esse usuário não existe!"

        }

      } else {

        user = await this.prisma.user.delete({

          where

        })

        return {

          status: "200",
          mensagem: "Usuário deletado com sucesso!",

        }

      }

    } catch(error) {

        console.log(`${error}`)
        
        return {

          status: "500",
          mensagem: "Erro ao deletar usuário! Contate nossa equipe!",
          error: `${error}`

        }

    }

  }

}