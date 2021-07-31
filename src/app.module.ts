import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
// import { configValidationSchema } from './config/config.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // ConfigModule.forRoot({
    //   envFilePath: [`.env.stage.${process.env.STAGE}`],
    //   validationSchema: configValidationSchema,
    // }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    // UserModule,
    TasksModule,
    AuthModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
