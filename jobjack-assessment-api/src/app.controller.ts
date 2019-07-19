import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request } from 'express';
import { Response } from 'express';
import fs = require('fs');
import readdir = require('readdirp');
import { DirEntry } from './interfaces/dir-entry';




@Controller("/api")
export class AppController {
  
  constructor() {}

  @Get()
  async getAll(@Req() req: Request, @Res() res: Response): Promise<any> {
    let items: DirEntry[] = [];    
    let basePath = req.query.basePath;
  if (req.query.basePath.charAt(0) !== "/") {
      basePath = `/${req.query.basePath}`;
  }    
  
    await readdir(basePath)
  .on('data', (entry) => {          
    //console.log("path: " + entry.path, + " name: " + entry.basename);
    let stats = fs.statSync(entry.fullPath);
    let dEntry: DirEntry = {
      path: entry.fullPath,        
      name: entry.basename,
  size: stats.size
}

    items.push(dEntry);  
//console.log(`${JSON.stringify({dEntry})}`);  
  })
  .on('warn', (w) => console.log(w))
  .on('error', (error) => {
    console.error('fatal error', error);
    res.status(500);
    return res.json(`${error.message}`);
  })
  .on('end', () => {
    //console.log(JSON.stringify(this.items));    
    res.json(items);
  });
 }

}
