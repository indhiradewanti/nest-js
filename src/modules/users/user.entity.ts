import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    @ApiProperty()
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    @ApiProperty()

    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    @ApiProperty()
    password: string;
}