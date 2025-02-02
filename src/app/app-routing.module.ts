import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',
    loadComponent: () => import('../app/pages/home/home.component')
    .then(m => m.HomeComponent)},

    {path:'room/:roomId',
      loadComponent: () => import('../app/pages/room/room.component')
      .then(m => m.RoomComponent)},

      {path:'**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
