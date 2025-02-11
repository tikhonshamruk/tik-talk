import { Routes } from '@angular/router';
import { LayoutComponent } from './common-ui/layout/layout/layout.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { SearchComponent } from './pages/search/search/search.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authGuard } from './auth/access.quard';
import { SettingComponent } from './pages/setting/setting.component';

export const routes: Routes = [
    {
        path: "", component: LayoutComponent, children: [
            {path: "", redirectTo: 'profile/me', pathMatch: 'full'},
            { path: "search", component: SearchComponent },
            { path: "profile/:id", component: ProfileComponent },
            { path: "setting", component: SettingComponent}
        ],
          canActivate: [authGuard]
    },
    { path: "login", component: LoginPageComponent }
];
