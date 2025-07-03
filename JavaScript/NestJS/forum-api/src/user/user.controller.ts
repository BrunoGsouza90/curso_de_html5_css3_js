import { Body, Controller, Get, Param, Put, Post, Req, Delete, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard)
    @Get()
    async getAllusers(): Promise<object> {

        return this.userService.findAllUsers()

    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getUser(
    @Param('id')
    id: string): Promise<object> {

        return this.userService.findUniqueUser({

            id: parseInt(id)

        })

    }

    @UseGuards(AuthGuard)
    @Post("create")
    async signupUser(
    @Body() 
    userData: Prisma.UserCreateInput
    ): Promise<object> {

        return this.userService.createUser(userData)

    }

    @UseGuards(AuthGuard)
    @Put("update/:id")
    async updateUser(
    @Req()
    request: Request): Promise<any> {

        return this.userService.updateUser({
            
            where: {
                
                id: parseInt(request.params.id)

            },

            data: request.body
        
        })

    }

    @UseGuards(AuthGuard)
    @Delete("delete/:id")
    async deletePost(
    @Param('id') id: string): Promise<object> {
        
        return this.userService.deleteUser({ 
            
            id: parseInt(id)
        
        });
    
    }

}