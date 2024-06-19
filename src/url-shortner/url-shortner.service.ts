import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlShortner } from './url-shortner.entity';
import { Repository } from 'typeorm';
import * as shortid from 'shortid';

@Injectable()
export class UrlShortnerService {

    constructor(@InjectRepository(UrlShortner) private urlrepository: Repository<UrlShortner>) { }

    async create(longUrl: string, baseUrl: string) {
        const urlCode = shortid.generate();
        const shortUrl = `${baseUrl}/${urlCode}`;

        const existingUrl = await this.urlrepository.findOne({ where: { longUrl } });
        if (existingUrl) {
            return existingUrl;
        }

        const newUrl = await this.urlrepository.save({ longUrl, shortUrl, urlCode });
        return await newUrl;
    }

    async findbyCode(urlCode: string) {
        return await this.urlrepository.findOne({ where: { urlCode:urlCode } });
    }
}
