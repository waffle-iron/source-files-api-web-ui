import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Config } from '../config';

@Injectable()
export class SourceWebService {

  constructor(public http: Http, public config: Config) { }

  getAPIKeys(userId) {

  }

}
