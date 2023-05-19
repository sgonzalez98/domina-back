import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import envSchema from './config/env.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: envSchema,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, { dbName: process.env.MONGO_DATABASE }),
    UsersModule,
    AuthModule,
    TodoModule,
  ],
})
export class AppModule {}
