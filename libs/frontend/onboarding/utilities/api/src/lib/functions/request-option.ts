import { HttpHeaders, HttpParams } from '@angular/common/http';
import { IApiOptions, IApiParameters } from '../interfaces/api.interface';

export function getHeaders(
  queryHeader: HttpHeaders | { [header: string]: string | string[] }
): HttpHeaders | null {
  if (!queryHeader) {
    return null;
  } else if (queryHeader instanceof HttpHeaders) {
    return queryHeader;
  }
  const casedHeaders = queryHeader;
  // const casedHeaders = snakecaseSerializer.serialize(queryHeader);
  return Object.keys(casedHeaders).reduce((header, headerName) => {
    return header.set(headerName, casedHeaders[headerName]);
  }, new HttpHeaders());
}

export function getParams(
  queryParams: HttpParams | { [param: string]: string | string[] }
): HttpParams | null {
  if (!queryParams) {
    return null;
  } else if (queryParams instanceof HttpParams) {
    return queryParams;
  }
  const casedQueryParameters = queryParams;
  return Object.keys(casedQueryParameters).reduce((params, paramName) => {
    return params.set(paramName, casedQueryParameters[paramName] as string);
  }, new HttpParams());
}

export function getRequestOptions(
  url: string,
  options: IApiOptions
): IApiParameters {
  const { params, headers } = options;
  let queryParams = null;
  let queryHeaders = null;
  if (params) {
    queryParams = getParams(params);
  }
  if (headers) {
    queryHeaders = getHeaders(headers);
  }
  return { url, params: queryParams, headers: queryHeaders };
}
