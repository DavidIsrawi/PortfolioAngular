import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { ProjectsComponent } from './components/projects.component';
import { HomeComponent } from './components/home.component';

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes )
