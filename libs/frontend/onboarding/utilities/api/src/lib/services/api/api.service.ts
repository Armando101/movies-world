import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { defaultOptions } from '../../constants/api.const';
import { IApiEndpoint } from '../../interfaces/api.interface';
import { IEnvironment } from '@olimpo/frontend/environments';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string;
  constructor(
    @Inject('environment') readonly environment: IEnvironment,
    private http: HttpClient
  ) {
    this.baseUrl = this.environment.baseUrl;
  }
  /**
   * HTTP get request
   *
   * @param endpoint  is url and cache options
   * @param options httpClient options
   * @param config   noLoading?: boolean; noHandleError?: boolean; successMessage?: string;
   */
  get<T>(
    endpoint: string | IApiEndpoint,
    options = defaultOptions,
    config = { pipes: true }
  ): Observable<T> {
    let pathUrl: string;
    if (typeof endpoint === 'string') {
      pathUrl = endpoint;
    } else {
      pathUrl = endpoint.url;
    }

    if (options.params) {
      options.params.api_key = this.environment.apiKey;
    }

    if (config.pipes) {
      return this.addPipe(
        this.http.get<T>(`${this.baseUrl}/${pathUrl}`, { ...options })
      );
    } else {
      return this.http.get<T>(`${this.baseUrl}/${pathUrl}`, { ...options });
    }
  }

  addPipe(request: Observable<any>) {
    return request.pipe(map((response) => response.results));
  }
}
