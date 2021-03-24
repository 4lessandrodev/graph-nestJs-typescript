import { Controller, Get, Query, Param } from '@nestjs/common';
import { PhotoRepository } from '@/photos/PhotoRepository';

interface Query {
    id?: string;
    photoname?: string;
}

@Controller('/photos')
export class PhotoController {
    constructor(readonly photoRepository: PhotoRepository) {}

    @Get(':photoID/user-liked')
    async findLikedPhotos(@Param('photoID') photoID: string): Promise<any[]> {
        return this.photoRepository.findUsersWhoLikedPhotos(photoID);
    }

    @Get()
    async findByFilter(@Query() query: Query): Promise<any[]> {
        const id = query.id;
        if (id) {
            return this.photoRepository.findByID(id);
        } else {
            return this.photoRepository.findPhotos();
        }
    }
}
