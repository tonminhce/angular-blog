import { Routes } from '@angular/router';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    {path: 'category', component: SingleCategoryComponent},
    {path: 'post', component: SinglePostComponent},
    {path:'about', component: AboutUsComponent},
    {path:'contact', component: ContactUsComponent},
];
