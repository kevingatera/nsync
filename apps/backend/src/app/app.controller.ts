import { Controller, Get } from "@nestjs/common";
import { SongsResponse } from "@nsync/data";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): SongsResponse {
    return {
      songPlays: this.appService.getSongsPlayed(),
    };
  }

  @Get("greatestSongsOfAllTime")
  getGreatestSongsOfAllTime(): SongsResponse {
    return {
      songPlays: this.appService.getGreatestSongsOfAllTime(),
    };
  }

  @Get("listened")
  getListened(): SongsResponse {
    return {
      songPlays: this.appService.getListened(),
    };
  }
}
