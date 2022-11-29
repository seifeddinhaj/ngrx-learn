import { InMemoryDbService } from "angular-in-memory-web-api";
import { User } from "../models/user";

export class UsersData implements InMemoryDbService{
    createDb(): Record<string, User[]> {
        const users: User[] =[
            {
                id: 0,
                username:'Name 1',
                isAdmin: true
            },
            {
                id: 1,
                username:'Name 2',
                isAdmin: false
            }
        ]
        return {users}
    }
}