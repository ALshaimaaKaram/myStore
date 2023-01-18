import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { CheckoutFormComponent } from './Components/checkout-form/checkout-form.component';
import { ConfirmationComponent } from './Components/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './Components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo:'/Home' , pathMatch: 'full' },
  { path: 'Home', component: ProductListComponent},
  { path: 'cart',component: CartComponent},
  { path: 'checkoutform',component: CheckoutFormComponent},
  { path: 'confirmation' ,component:ConfirmationComponent},
  { path: 'Product/:PID', component: ProductItemDetailComponent},
  { path: '**', redirectTo: '/Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
