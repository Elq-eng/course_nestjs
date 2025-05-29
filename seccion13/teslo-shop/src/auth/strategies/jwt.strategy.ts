import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../entities/user.entity";
import { JwtPayload } from "../interface/jwt.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from '@nestjs/config';
import { Injectable, UnauthorizedException } from "@nestjs/common";



@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy) {


  constructor(
    @InjectRepository( User )
    private readonly userRepository: Repository<User>,
    configService: ConfigService,
  ){
    const secret = configService.get<string>('JWT_SECRET');
    if (!secret) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }
    console.log('secret', secret)
    super({
      secretOrKey: secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    });
  }


  async validate( payload: JwtPayload): Promise<User> {
    

    const { id } = payload;

    const user = await this.userRepository.findOneBy({ id });

    if ( !user ) 
      throw new UnauthorizedException('Token not valid')

    if ( !user.isActive )
      throw new UnauthorizedException('User is inactive, tal wiht an admin')

    
    return user;
  }

}