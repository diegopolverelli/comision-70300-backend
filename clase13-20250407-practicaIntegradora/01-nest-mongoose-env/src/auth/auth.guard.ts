import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwt:JwtService
  ) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const req = context.switchToHttp().getRequest();

    // if (req.query.username!="admin"){
    //   return false
    // }
    if(!req.headers.authorization){
      return false
    }

    // BEARER asdfasdfa.adsfasdf9asdf.asdfasdfasdf
    let token=req.headers.authorization.split(" ")[1]

    try {
      let usuario=this.jwt.verify(token, {secret:process.env.SECRET})
      req.user=usuario
    } catch (error) {
      Logger.error(error.message, "AuthGuard")
      return false
    }


    return true;
  }
}
