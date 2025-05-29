import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";


export const Rawheaders =  createParamDecorator(
  ( data:string , ctx: ExecutionContext ) => {
  
    const req = ctx.switchToHttp().getRequest();
    return req.rawHeaders;
  }
)