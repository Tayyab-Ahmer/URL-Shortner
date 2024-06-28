import { Controller, Post, Body, Get, Res, Param } from '@nestjs/common';
import { UrlShortnerService } from './url-shortner.service';
import { CreateUrlDto } from './url-shortner.dto';

@Controller()
export class UrlShortnerController {
    constructor(private readonly urlservice: UrlShortnerService) { }

    @Post('url-shortner')
    async createShortUrl(@Body() createurldto: CreateUrlDto) {

        const baseUrl = 'http://localhost:3000';
        const url = await this.urlservice.create(createurldto.longUrl, baseUrl);
        return await url.shortUrl;
    }

    @Get(':code')
    async redirect(@Param('code') code: string, @Res() res: any) {
        const url = await this.urlservice.findbyCode(code);
        return res.redirect(url.longUrl);
    }
}
    