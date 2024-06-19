import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlShortnerModule } from './url-shortner/url-shortner.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports: [ConfigModule.forRoot({ isGlobal: true }), UrlShortnerModule],
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'newpassword',
    database: 'url-shortner',
    autoLoadEntities: true, 
    synchronize: true,
    // logging: true,
  }), UrlShortnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
