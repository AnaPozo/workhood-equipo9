import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnunciosModule } from './anuncios/anuncios.module';

@Module({
  imports: [AnunciosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



