import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReleasesModule } from './modules/releases/releases.module';
import { EventsModule } from './modules/events/events.module';
import { ArtistsModule } from './modules/artists/artists.module';
import { AuthModule } from './modules/auth/auth.module';
import { TracksController } from './modules/tracks/tracks.controller';
import { TracksService } from './modules/tracks/tracks.service';
import { TagsController } from './modules/tags/tags.controller';
import { TagsService } from './modules/tags/tags.service';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
// @Module({
//   imports: [ReleasesModule, EventsModule, ArtistsModule, AuthModule],
//   controllers: [AppController, TracksController, TagsController],
//   providers: [AppService, TracksService, TagsService],
// })

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ReleasesModule,
    EventsModule,
    ArtistsModule,
    AuthModule,
  ],
  controllers: [AppController, TracksController, TagsController],
  providers: [AppService, TracksService, TagsService],
})
export class AppModule {}
