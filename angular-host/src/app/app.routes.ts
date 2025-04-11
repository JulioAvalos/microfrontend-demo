import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RemoteReactWrapperComponent} from './remote/remote-react-wrapper.component';

export const HOST_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'remote-angular',
    loadChildren: () => loadRemoteModule('remoteAngular', './Routes').then(m => m.routes)
  },
  { path: '**', redirectTo: '' }
];
