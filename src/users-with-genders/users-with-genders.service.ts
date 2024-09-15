import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class UsersWithGendersService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUsersWithGenderDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createUsersWithGenderDto});
  }

  async findAll(role?: 'Gay' | 'Straight' | 'Pan') {
    if (role) {
      return this.databaseService.user.findMany({
      where: {
        role, 
      }
    });
    }
    return this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateUsersWithGenderDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUsersWithGenderDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      }
    });
  }
}
