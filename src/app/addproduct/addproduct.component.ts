import { Component } from '@angular/core';
import { products } from './product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  product:products[]=[
    {
      productId:1001,
      productName:'Laptop',
      availability:15
    }
  ];

}
