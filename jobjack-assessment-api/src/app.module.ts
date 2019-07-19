import { Module } from '@nestjs/common';


import { AppController } from './app.controller';

import { from } from 'rxjs';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
