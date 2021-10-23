import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@olimpo/frontend/onboarding/features/home').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'movie/:id',
    pathMatch: 'full',
    loadChildren: () =>
      import('@olimpo/frontend/onboarding/features/movie-detail').then(
        (m) => m.MovieDetailModule
      ),
  },
  {
    path: 'search',
    pathMatch: 'full',
    loadChildren: () =>
      import('@olimpo/frontend/onboarding/features/search').then(
        (m) => m.SearchModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
