import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { PackagesComponent } from './components/packages/packages.component';
import { CareersComponent } from './components/careers/careers.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './auth/admin/admin.component';
import { AdminDataComponent } from './auth/admin-data/admin-data.component';
import { Home2Component } from './home2/home2.component';
import { ReviewComponent } from './components/review/review.component';
import { PrivacyPolicyComponent } from './policy/privacy-policy/privacy-policy.component';
import { TermsComponent } from './policy/terms/terms.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: Home2Component
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'packages',
        component: PackagesComponent
    },
    {
        path: 'careers',
        component: CareersComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registerxyz',
        component: RegisterComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'adminData/:name',
        component: AdminDataComponent
    },
    {
        path: 'review',
        component: ReviewComponent
    },
    {
        path: 'privacy',
        component: PrivacyPolicyComponent
    },
    {
        path: 'terms',
        component: TermsComponent
    }

];
