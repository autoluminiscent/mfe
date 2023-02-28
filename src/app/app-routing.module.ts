import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'graph',
    loadChildren: () =>
      import('./graph/graph.module').then((m) => m.GraphModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
