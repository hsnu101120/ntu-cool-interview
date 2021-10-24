import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    // 1. everyone can create a user by name and email
    @Post()
    addUser(
        @Body('name') userName: string, 
        @Body('email') userEmail: string
    ) {
        const generatedId = this.userService.addUser(userName, userEmail);
        return { id: generatedId };
    }

    @Get()
    listAllUsers() {
        return this.userService.listAllUsers();
    }

    // 2. everyone can get a user by user id
    @Get(':id')
    getUserById(@Param('id') userId: number) {
        return this.userService.getUserById(userId);
    }

    // 3. everyone can query a user by email or name
    @Get()
    getUserByQuery() {
        
    }

    // 4. everyone can edit user’s name and user’s email by user id
    @Patch(':id')
    updateUserById(
        @Param('id') userId: number,
        @Body('name') userName: string,
        @Body('email') userEmail: string
    ) {
        this.userService.updateUserById(userId, userName, userEmail);
        return null;
    }

    // 5. everyone can delete a user by user id
    @Delete(':id')
    deleteUserById(@Param('id') userId: number) {
        this.userService.deleteUserById(userId);
        return null;
    }
}