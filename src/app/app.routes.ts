import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { PackagesComponent } from './components/packages/packages.component';
import { CareersComponent } from './components/careers/careers.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
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
        path:'packages',
        component: PackagesComponent
    },
    {
        path:'careers',
        component:CareersComponent
    }
];
