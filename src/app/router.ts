import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CardInfoComponent} from "./card-info/card-info.component";
import { CardListComponent } from "./card-list/card-list.component";
import { AddContactComponent } from "./add-contact/add-contact.component";

const routes: Routes = [
    { path: '', component: CardListComponent },
    { path:'detail/:id', component: CardInfoComponent },
    { path:'formulaire-contact', component: AddContactComponent }
];

@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class Router {}


