import { annoucement, stop, route } from 'src/model/models';
import { BASE_API } from 'src/environments/environment';
import { Injectable, Input } from '@angular/core';
import {InterceptedHttp} from './http.interceptor.service'
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import * as _ from 'lodash';

@Injectable()
export class HttpBackendService {
  annoncement : annoucement;
  stops: stop[] = [];
  announcements : annoucement[] = [];
  constructor(public http : InterceptedHttp) { 
    console.log('HttpBackendService Initialized');
  }

  getAnnouncements() : Promise<annoucement[]>
  {
    let that = this;
    let uri = '';
    return new Promise<annoucement[]>(resolve => {
      this.http.get(environment.URL + BASE_API.get_announcements + environment.Auth_token, uri ,null)
      .pipe(map(res => res.json()))
      .subscribe((data) => {
      console.log(data);
      for(let i =0; i<_.size(data.announcements);i++ )
      {
        //console.log(new stop(data.stops[i]));
        that.announcements.push(new annoucement(data.announcements[i]));
      }
      resolve(this.announcements);
     });
    }) 
  }
  
  getStops() : Promise<stop[]>
  {
    let that = this;
    let uri = '';
    
    return new Promise<stop[]>(resolve => {
      this.http.get(environment.URL + BASE_API.get_stops + environment.Auth_token, uri ,null)
      .pipe(map(res => res.json()))
      .subscribe((data) => {
  
      //console.log(data);
      //console.log(_.size(data.stops));
      for(let i =0; i<_.size(data.stops);i++ )
      {
        //console.log(new stop(data.stops[i]));
        that.stops.push(new stop(data.stops[i]));
      }
      resolve(that.stops);
     });  
    }) 
  }

  getStop(number) : Promise<stop>
  {
    let that = this;
    let uri = '';
    return new Promise<stop>(resolve => {
      this.http.get(environment.URL + BASE_API.get_stop + environment.Auth_token, uri ,null)
      .pipe(map(res => res.json()))
      .subscribe((data) => {
      console.log(data);
      resolve(new stop(data));
     });
    }) 
  }
}
