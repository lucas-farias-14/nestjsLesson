import { Module } from '@nestjs/common';
import { UsersWithGendersService } from './users-with-genders.service';
import { UsersWithGendersController } from './users-with-genders.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersWithGendersController],
  providers: [UsersWithGendersService],
})
export class UsersWithGendersModule {}
