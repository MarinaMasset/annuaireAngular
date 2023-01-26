import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CardInfoComponent} from "./card-info/card-info.component";
import { CardListComponent } from "./card-list/card-list.component";

const routes: Routes = [
    { path: '', redirectTo: '/liste', pathMatch: 'full' },
    { path:'liste', component: CardListComponent },
    { path:'detail/:id', component: CardInfoComponent }
];

@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class Router {}


