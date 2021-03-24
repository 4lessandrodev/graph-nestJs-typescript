import { Controller, Query, Body, Param, Put, Get, Delete } from '@nestjs/common';
import { UserRepository, User } from '@/users/UserRepository';

interface Query {
    id?: string;
    username?: string;
}

@Controller('/users')
export class UserController {
    constructor(readonly userRepository: UserRepository) {}

    @Get(':username/liked-photos')
    async findLikedPhotos(@Param('username') username: string): Promise<any[]> {
        return this.userRepository.findPhotosLikedByUser(username);
    }

    @Get()
    async findByFilter(@Query() query: Query): Promise<any[]> {
        const id = query.id;
        const username = query.username;

        if (id) {
            return this.userRepository.findByID(id);
        }
        if (username) {
            return this.userRepository.findByUsername(username);
        } else {
            // Default behaviour of this endpoint
            // TODO: throw if query does not strictly match
            return this.userRepository.find();
        }
    }

    @Put(':username')
    async update(@Param('username') username: string, @Body() user: User): Promise<any[]> {
        // TODO: Move to seperate validation module
        const originalUser = await this.userRepository.findByUsername(username);
        if (originalUser.length < 1) {
            return [{ message: `The user '${username}' does not exists` }];
        }
        return this.userRepository.update({ ...originalUser[0], ...user });
    }

    @Delete(':username')
    async remove(@Param('username') username: string): Promise<any[]> {
        return this.userRepository.remove(username);
    }
}
