import { XHRBackend, RequestOptions, Http } from '@angular/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { InterceptedHttp } from './http.interceptor.service';

export function httpFactory(xhrBackend : XHRBackend, requestOptions: RequestOptions) : Http
{
  return new InterceptedHttp(xhrBackend,requestOptions);
}