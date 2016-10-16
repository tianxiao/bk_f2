import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'



import { LoginComp }       from './login.comp'
import { SignupComp }      from './signup.comp'
import { HomeComp }        from './home.comp'


const appRoutes: Routes = [
    { path: '',          component: LoginComp  },
    { path: 'login',     component: LoginComp  },
    { path: 'signup',    component: SignupComp },
    { path: 'home',      component: HomeComp   },
    { path: '**',        component: LoginComp  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);