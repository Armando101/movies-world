import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { defaultOptions } from '../../constants/api.const';
import { IApiEndpoint } from '../../interfaces/api.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * HTTP get request
   *
   * @param endpoint  is url and cache options
   * @param options httpClient options
   * @param config   noLoading?: boolean; noHandleError?: boolean; successMessage?: string;
   */
  get<T>(
    endpoint: string | IApiEndpoint,
    options = defaultOptions
  ): Observable<T> {
    let pathUrl: string;
    if (typeof endpoint === 'string') {
      pathUrl = endpoint;
    } else {
      pathUrl = endpoint.url;
    }

    return this.http.get<T>(pathUrl, { ...options });
  }
}
