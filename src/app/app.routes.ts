import { Routes } from '@angular/router';
import { Content } from './content/content';
import { Inscription } from './inscription/inscription';

export const routes: Routes = [
    {path: "", component: Content},
    {path: "inscription", component: Inscription}
    
];
