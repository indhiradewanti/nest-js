// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { DatabaseModule } from './core/database/database.module';
// import { UsersModule } from './modules/users/users.module';

// @Module({
//     imports: [
//         ConfigModule.forRoot({ isGlobal: true }),
//         SequelizeModule.forRoot({
//             dialect: 'postgres',
//             host: process.env.HOST,
//             port: +process.env.PORT,
//             username: process.env.USERNAME,
//             password: process.env.PASSWORD,
//             database: process.env.DATABASE,
//         }),
//         DatabaseModule,
//         UsersModule,
//     ]
// })
// export class AppModule { }

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DatabaseModule } from './core/database/database.module';
import { User } from './modules/users/user.entity';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      models: [User],
      synchronize: true,
      sync: {
        alter: true,
      },
      autoLoadModels: true,
    }),
    // DatabaseModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
