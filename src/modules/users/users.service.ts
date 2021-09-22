import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from '../users/dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User, // @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(dto: UserDto): Promise<User> {
    console.log(dto, '< dto');

    return this.userRepository.create(dto);
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  async destroy(id: number): Promise<User> {
    const user = this.findOne(id);
    this.userRepository.destroy({
      where: { id },
    });
    return user;
  }
}
