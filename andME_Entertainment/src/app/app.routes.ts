import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { InventoryStockComponentSA } from './components/inventory-stock-SA/inventory-stock.component';
import { InventoryStockComponentSK } from './components/inventory-stock-SK/inventory-stock-2.component';
import { InventoryStockComponentJP } from './components/inventory-stock-JP/inventory-stock-3.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LocationsComponent } from './components/locations/locations.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CraftComponentSA } from './components/craft-SA/craft.component';
import { CraftComponentSK } from './components/craft-SK/craft-2.component';
import { CraftComponentJP } from './components/craft-JP/craft-3.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'authentication', component: AuthenticationComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'inventory-stock-SA', component: InventoryStockComponentSA },
    { path: 'inventory-stock-SK', component: InventoryStockComponentSK },
    { path: 'inventory-stock-JP', component: InventoryStockComponentJP },
    { path: 'craftSA', component: CraftComponentSA },
    { path: 'craftSK', component: CraftComponentSK },
    { path: 'craftJP', component: CraftComponentJP },
    
];
