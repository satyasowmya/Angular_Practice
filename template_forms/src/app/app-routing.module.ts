import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConfirmComponent } from "./confirm/confirm.component";
import { FormsComponent } from "./forms/forms.component";

const routes : Routes = [
    {path: 'confirm',component: ConfirmComponent},
    {path:'home', component:FormsComponent},
    {path:'', component:FormsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})

export class AppRoutingModule{}