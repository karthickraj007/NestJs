import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from "jsonwebtoken"

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    const auth = request.headers['authorization'] ?? "";

    if (!auth) {
      throw new BadRequestException('token is required')
    }

    const token = auth.split(" ")[1]

    if (!token) {
      throw new BadRequestException('Token is missing');
    }

    try {
      const verifyToken = jwt.verify(token, 'abcdefh'); 
      request.user = verifyToken;
      return true; 
      
    } catch (err) {
      throw new BadRequestException('Token is invalid');
    }
  }
}
