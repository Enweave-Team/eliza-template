import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from "../config";


async function bootstrap() {
  const PORT : number = env.serverPort || 3000
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
  });
}
bootstrap();
