import { AddPersonalInfoComponent } from './add-personal-info/add-personal-info.component';
import { BiodataComponent } from './biodata/biodata.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { LoginComponent } from './login/login.component';

import { Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home',  pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'my-biodata', component: BiodataComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'select-template', component: TeamComponent},
    {path: '504', component: ServerErrorComponent},
    {path: '**', component: PageNotFoundComponent}
];

