import { Injectable } from '@angular/core';
import { ApiService } from '@olimpo/frontend/onboarding/utilities/api';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private apiService: ApiService) {}
}
