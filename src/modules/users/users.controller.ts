import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, User as UserEntity } from './user.entity'
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll() {
    // get all users in the db
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserEntity> {
    // find the post with this id
    const user = await this.userService.findOne(id);

    // if the user doesn't exit in the db, throw a 404 error
    if (!user) {
      throw new NotFoundException("This user doesn't exist");
    }
    // if user exist, return the user
    return user;
  }

//   @Post()
//   create(@Body() data: UserDto): Promise<User> {
//         return this.userService.create(data)
//   }

  @Delete(':id')
  destroy(@Param('id') id:number): Promise<User> {
        return this.userService.destroy(id)
  }
}
