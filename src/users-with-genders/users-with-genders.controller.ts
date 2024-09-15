import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Ip } from '@nestjs/common';
import { UsersWithGendersService } from './users-with-genders.service';
import { Prisma, Role } from '@prisma/client';
import { Throttle, SkipThrottle } from '@nestjs/throttler';
import { MyLoggerService } from 'src/my-logger/my-logger.service';
@SkipThrottle()
@Controller('users-with-genders')
export class UsersWithGendersController {
  constructor(private readonly usersWithGendersService: UsersWithGendersService) {}
  private readonly logger = new MyLoggerService(UsersWithGendersController.name);

  @Post()
  create(@Body() createUsersWithGenderDto: Prisma.UserCreateInput) {
    return this.usersWithGendersService.create(createUsersWithGenderDto);
  }

  @SkipThrottle({ default: false })
  @Get()
  findAll(@Ip() ip: string, @Query('role') role? : Role) {
    this.logger.log(`Requested for all Users\t${ip}`, UsersWithGendersController.name);
    return this.usersWithGendersService.findAll(role);
  }

  @Throttle({ short: {ttl: 1000, limit: 1} })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersWithGendersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersWithGenderDto: Prisma.UserUpdateInput) {
    return this.usersWithGendersService.update(+id, updateUsersWithGenderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersWithGendersService.remove(+id);
  }
}
