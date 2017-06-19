import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { WelcomeComponent } from './home/welcome.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


const routes: Routes = [
    // { path: 'login', component: LoginComponent },
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    // // otherwise redirect to home
    // { path: '**', redirectTo: 'login' }

    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'Forbidden', component: ForbiddenComponent },
    { path: 'Unauthorized', component: UnauthorizedComponent },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRouteModule { }
