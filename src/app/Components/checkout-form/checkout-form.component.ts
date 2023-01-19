import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/Cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  items = this.cartService.getItems();

  checkoutForm : FormGroup = {} as FormGroup;

  name:string = '';
  address: string = '';
  phone: number = 0;
  constructor(private cartService: CartService,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group(
      {
        name: ["", [Validators.required]],
        address: ["", [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern("^01[0-2,5]{1}[0-9]{8}$")]]
      }
    )

  }
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
