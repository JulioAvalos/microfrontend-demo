import { Routes } from '@angular/router';
import {BodyComponent} from "./layout/body/body.component";

export const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/modules.routes').then(m => m.modulesRoutes),
      }
    ]
  }
];
