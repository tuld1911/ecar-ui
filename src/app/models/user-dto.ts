export class UserDto {
    email: string;
    fullName: string;
    role: string;

    constructor(email: string, fullName: string, role: string) {
        this.email = email;
        this.fullName = fullName;
        this.role = role;
    }
}