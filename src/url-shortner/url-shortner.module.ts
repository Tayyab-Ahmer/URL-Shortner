import { Module } from '@nestjs/common';
import { UrlShortnerController } from './url-shortner.controller';
import { UrlShortnerService } from './url-shortner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlShortner } from './url-shortner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UrlShortner])],
  controllers: [UrlShortnerController],
  providers: [UrlShortnerService]
})
export class UrlShortnerModule { }
