export class UserService {
  validateUser(userId: string): boolean {
    console.log(`Validating user: ${userId}`);
    return true;
  }
}