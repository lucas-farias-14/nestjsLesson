import { Test, TestingModule } from '@nestjs/testing';
import { UsersWithGendersController } from './users-with-genders.controller';
import { UsersWithGendersService } from './users-with-genders.service';

describe('UsersWithGendersController', () => {
  let controller: UsersWithGendersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersWithGendersController],
      providers: [UsersWithGendersService],
    }).compile();

    controller = module.get<UsersWithGendersController>(UsersWithGendersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
