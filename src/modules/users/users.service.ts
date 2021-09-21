import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

//   async create(user: UserDto): Promise<User> {
//       return await this.userRepository.create<User>(user);
//   }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  async destroy(id:number): Promise<User> {
      const user = this.findOne(id)
      this.userRepository.destroy({
          where: { id }
      })
      return user;
  }
}
