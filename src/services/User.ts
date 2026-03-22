import type { CreateUserBody } from '@/schemas/user';

export type User = {
  id: number;
  name: string;
  created: string;
};

class UserService {
  private users = new Map<number, User>();
  private nextId = 1;

  constructor() {
    this.createUser({ name: 'Template User 1' });
    this.createUser({ name: 'Template User 2' });
  }

  getUsers() {
    return [...this.users.values()].sort((left, right) => left.id - right.id);
  }

  getUserById(id: number) {
    return this.users.get(id) ?? null;
  }

  createUser(input: CreateUserBody) {
    const timestamp = new Date().toISOString();
    const user: User = {
      id: this.nextId,
      name: input.name,
      created: timestamp,
    };

    this.users.set(user.id, user);
    this.nextId += 1;

    return user;
  }
}

const userService = new UserService();

export default userService;
