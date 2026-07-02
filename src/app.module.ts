import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReleasesModule } from './modules/releases/releases.module';
import { EventsModule } from './modules/events/events.module';
import { ArtistsModule } from './modules/artists/artists.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ReleasesModule, EventsModule, ArtistsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
