import { Test, TestingModule } from '@nestjs/testing';
import { UsersWithGendersService } from './users-with-genders.service';

describe('UsersWithGendersService', () => {
  let service: UsersWithGendersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersWithGendersService],
    }).compile();

    service = module.get<UsersWithGendersService>(UsersWithGendersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
