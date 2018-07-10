import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserViewComponent } from "./user-view/user-view.component";
import { HomepageComponent } from "./homepage/homepage.component";


const homepageRoutes: Routes = [
    {
        path: '', component: HomepageComponent,
        children: [
            {path:'', component: UserViewComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homepageRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomepageRoutingModule { }