import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {appMiddleware} from './app.middleware'
import { AuthGuard } from './auth.guard';
import { LoggingInterceptor } from './logging.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const pipe = new ValidationPipe(
    {
      whitelist: true,
      transform : true 
    })
  app.useGlobalPipes(pipe)
  app.use(appMiddleware)
  app.useGlobalGuards(new AuthGuard());
  app.useGlobalInterceptors(new LoggingInterceptor())
  await app.listen(process.env.PORT ?? 3000, ()=>{
    console.log("server is listening on 3000")
  });
}
bootstrap();
