import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService { // Şimdilik yerel bir database yaptık
    private readonly users = [
        {
            id: "123",
            username: "Fatih",
            age: 18,
        },
        {
            id: "321",
            username: "Enes",
            age: 21,
        }
    ];

    findAll() {
        return this.users;
    }
}