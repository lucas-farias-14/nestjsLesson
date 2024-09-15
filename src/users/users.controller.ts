import { Controller, Get, Post, Param, Body, Patch, Delete, Query, ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @Get() // Get /users or /users?role=value 
  findAll(@Query('role') role?: 'Gay' | 'Straight' | 'Pan' ){
    return this.usersService.findAll(role);
        
  }
    
  @Get(':id') // Get /users/:id
  findOne(@Param('id',ParseIntPipe) id: number){
		
    	return this.usersService.findOne(id);
  }

	@Post() // Post /users
	create(@Body(ValidationPipe) createUserDto: CreateUserDto){
		return this.usersService.createUser(createUserDto);
	}

	@Patch(':id') // Patch /users/:id
	updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
		return this.usersService.update(id, updateUserDto);
	}

	@Delete(':id') // Delete /users/:id
	removeUser(@Param('id', ParseIntPipe) id: number){
		return this.usersService.delete(+id);
	}
	
}
