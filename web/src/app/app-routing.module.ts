import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ListGabsComponent } from './gabs/list-gabs.component';
import { WriteGabComponent } from './gabs/write-gab.component';
import { activateIfAuthenticated } from './auth/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'gab',
    component: WriteGabComponent,
    canActivate: [activateIfAuthenticated],
  },
  {
    path: '**',
    component: ListGabsComponent,
    canActivate: [activateIfAuthenticated],
    data: {
      reuseComponent: false,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
