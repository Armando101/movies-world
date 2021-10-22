import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IApiOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  params?: HttpParams | { [param: string]: string | string[] };
}

export interface IApiEndpoint {
  url: string;
  cache?: boolean;
}

export interface IApiParameters {
  headers: HttpHeaders | null;
  params: HttpParams | null;
  url: string;
}
