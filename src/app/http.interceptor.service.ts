import { Injectable } from '@angular/core';
import { ConnectionBackend, RequestOptions, RequestOptionsArgs, Headers, Response, Http } from '@angular/http';
//import { Observable } from 'rxjs/Rx'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class InterceptedHttp extends Http {
  jsonType : string = 'application/json';
  constructor(backend: ConnectionBackend, defaultOptions : RequestOptions) {
    super(backend, defaultOptions); 
  }
  get (baseUri: string, url:string, options? : RequestOptionsArgs) : Observable<Response>
  {
    url = this.updateUrl(baseUri,url);
    return super.get(url, this.gerRequestOptionArgs(options)); 
  }

  private updateUrl(baseUri: string, req:string)
  {
    return baseUri + req;
  }

  private gerRequestOptionArgs( options?: RequestOptionsArgs) : RequestOptionsArgs
  {
    if(options == null)
    {
      options = new RequestOptions();
    }
    if(options.headers == null)
    {
      options.headers = new Headers();
    }
    options.headers.append('Accept', this.jsonType);
    options.headers.append('Authorization','bearer' + environment.AccessTolen)
      
    return options;
  }
}
