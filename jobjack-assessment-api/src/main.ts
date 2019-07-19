import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express = require('express');
import  https = require('https');
import { ExpressAdapter } from '@nestjs/platform-express';

import { readFileSync } from "fs";
import { Config } from "./config";

async function bootstrap() {
  let options = {    
    cert: readFileSync(Config.SSL_CERT_PATH),
    key: readFileSync(Config.SSL_KEY_PATH)
  };

  const expressApp = express();

  let httpsServer = https.createServer(options, expressApp);
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  //app.useGlobalPipes(new ValidatorPipe());
  app.init();
  await httpsServer.listen(3000);
}
bootstrap();
