import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TodasExcepciones } from './common/Filtros/http-exceptions.filter';
import { TiempoSalidaInterceptor } from './common/Interceptores/tiemposalida.interceptor';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(
    new TodasExcepciones()
  );
  app.useGlobalInterceptors(new TiempoSalidaInterceptor());
  
  await app.listen(3000);
}
bootstrap(); 
