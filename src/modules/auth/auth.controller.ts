import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('login')
  async createToken(@Body() userInfo): Promise<any> {
    return await this.authService.login(userInfo.name, userInfo.password);
  }

  @Get('checkLogin')
  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(AuthGuard())
  // @UseGuards(new RoleGuard(['admin']))
  public checkLogin(@Req() req) {
    return 'valid user: success!';
  }
}
