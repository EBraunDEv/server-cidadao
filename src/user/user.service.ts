import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async login(name: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        username: name,
        password: password,
      },
    });
  
    if (!user) {
      throw new Error('Usuário ou senha inválidos');
    }
  
    return {
      name: user.username,
      password: user.password,
    };
  }
  
  
  
}  