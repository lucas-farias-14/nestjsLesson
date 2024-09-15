import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            'id': 1,
            'name': 'John Doe',
            'email': 'John@Doe.com',
            'role': 'Gay'
        },
        {
            'id': 3,
            'name': 'John Straight',
            'email': 'John@Straight.com',
            'role': 'Straight'
        }
    ]

    findAll(role?: 'Gay' | 'Straight' | 'Pan') {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role);
            if (rolesArray.length === 0) throw new NotFoundException(`No user with role ${role} found`);
            return rolesArray;
        }
        return this.users;
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id);
        
        if (!user) throw new NotFoundException(`User with id ${id} not found`);
        return user;
    }

    createUser(createUserDto: CreateUserDto){
        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)[0];
        const newUser = {
            id: userByHighestId.id + 1,
            ...createUserDto
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updatedUserDto: UpdateUserDto){
        this.users = this.users.map(user => {
            if (user.id === id) {
                return {
                    ...user,
                    ...updatedUserDto
                }
            }
            return user;
        });

        return this.findOne(id)
    }

    delete(id: number){
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
}
