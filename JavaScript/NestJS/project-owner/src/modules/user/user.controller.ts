import { Controller, Get, Patch, Query, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

interface QueryPayload {

    filter: string;
    limit: number;

}

@Controller('user')
export class UserController {

    constructor(private UserService: UserService){}

    // Decorator para requisições HTTP do tipo "GET".
    @Get()

    // Estamos retornando um JSON. Estamos retornando exatamente aquilo que é passado no queryString.
    // Exemplo: http://localhost:3000/user?filter=testando
    // usamos "?filter=testando".
    findAll(@Query() query: QueryPayload): object[] {
  
      return [
        
            {

                id: "11"

            },

            {

                query: query.limit,
                filter: query.filter

            },

            {

                userservice: this.UserService.findAll()

            }
    
        ];
  
    }

    // Decorator para requisições HTTP do tipo "Update".
    @Patch(":id")
    update(@Param('id') id: string): object[] {

        return [{id}];

    }

    // Decorator para requisições HTTP do tipo "Post".
    @Post()
    save(@Body() user: UserDto): UserDto {

        return user;

    }

}