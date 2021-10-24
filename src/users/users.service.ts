import { BadRequestException, Injectable } from "@nestjs/common";
import { User } from "./user";

@Injectable()
export class UserService {
    private users: User[] = [];

    addUser(name: string, email:string) {
        // if email format does not match /^\S@\S$/, return Bad Request
        if (!/^\S@\S$/.test(email)) {
            throw new BadRequestException('Invalid Email Format.');
        }
        const id = new Date().valueOf();
        const newUser = new User(id, name, email);
        this.users.push(newUser);
        return id;
    }

    listAllUsers() {
        return [...this.users];
    }

    getUserById(id: number) {
        const user = this.findUserById(id)[0];
        return { ...user };
    }

    queryUserByEmail(email: string) {

    }

    queryUserByName(name: string) {

    }

    updateUserById(id: number, name: string, email: string) {
        const [user, index] = this.findUserById(id);
        const updatedUser = { ...user };
        if (name) {
            updatedUser.name = name;
        }
        if (email) {
            // if email format does not match /^\S@\S$/, return Bad Request
            if (!/^\S@\S$/.test(email)) {
                throw new BadRequestException('Invalid Email Format.');
            }
            updatedUser.email = email;
        }
        this.users[index] = updatedUser;
    }

    deleteUserById(id: number) {
        const index = this.findUserById(id)[1];
        this.users.splice(index, 1);
    }

    private findUserById(id: number): [User, number] {
        const userIndex = this.users.findIndex(user => user.id == id);
        const user = this.users[userIndex];
        // if the user doesn’t exist, return Bad Request
        if (!user) {
            throw new BadRequestException('Could not find user.');
        }
        return [user, userIndex];
    }
}