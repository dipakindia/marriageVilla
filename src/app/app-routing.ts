import { CommunityDialog } from './dialog/dialog.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SliderComponent } from './slider/slider.component';
import { ValidateFieldsSubmitFormComponent } from './validate-fields-submit-form/validate-fields-submit-form.component';
import { SikhComponent } from './team/common/sikh/sikh.component';
import { SignupComponent } from './signup/signup.component';
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
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';
import { ModelFormComponent } from './model-form';
import { PaymentTemplateComponent } from './payment-template/payment-template.component';

import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
export const routes: Routes = [
    {path: '', redirectTo: '/home',  pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'home', component: HomeComponent},
    {path: 'my-biodata', component: BiodataComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'blog', component: BlogComponent},
    { path: 'blog/:id', component: BlogDetailPageComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'select-template', component: TeamComponent},
    {path: 'select-template-sikh', component: SikhComponent},
    {path: 'form', component: ModelFormComponent},
    {path: 'payment', component: PaymentTemplateComponent},
    {path: 'terms', component: TermsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'silder', component: SliderComponent},
    {path: 'my-account', component: MyAccountComponent},
    {path: 'biodata-information', component: AddPersonalInfoComponent},
    {path: '504', component: ServerErrorComponent},
    {path: '**', component: PageNotFoundComponent},
    
   
];

