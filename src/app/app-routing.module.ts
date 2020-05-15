import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {ChildAComponent} from "./components/child-a/child-a.component";
import {ChildBComponent} from "./components/child-b/child-b.component";


const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailsComponent, children: [
      {path: 'child-a', component: ChildAComponent},
      {path: 'child-b', component: ChildBComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
