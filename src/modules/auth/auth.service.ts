import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  user = { email: 'test@email.com', name: 'admin', password: '123' };

  constructor(private readonly jwtService: JwtService) {
  }

  async createToken(name: string, password: string) {
    const user: JwtPayload = { email: 'test@email.com', name, password };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return { user: 'admin', password: '123' };
  }

  async login(name: string, password: string): Promise<any> {
    // this.user = await this.employeeRepository.findOne({ name: name });
    if (this.user !== undefined && this.user.password === password) {
      return this.createToken(this.user.name, this.user.password);
    } else {
      return 'login failed !';
    }
  }
}
