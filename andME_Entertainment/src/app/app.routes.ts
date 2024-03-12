import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { InventoryStockComponent } from './components/inventory-stock/inventory-stock.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LocationsComponent } from './components/locations/locations.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CraftComponent } from './components/craft/craft.component';

export const routes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'inventory-stock', component: InventoryStockComponent },
    { path: 'craft', component: CraftComponent },
    
];
