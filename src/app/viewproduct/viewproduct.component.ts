import { Component, OnInit } from '@angular/core';
import { products } from '../addproduct/product';
import { MyserviceService } from '../MyApiService/myservice.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  
  product:products[]=[];
  
  constructor(private Service:MyserviceService) {
  }
  
  ngOnInit(): void {
    // this.Service.getProduct().subscribe({
    //   next:(product)=>{
    //     console.log(product)
    //   },
    //   error:(response)=>{
    //     console.log(response);
    //   }
    // });
    this.Service.getProduct().subscribe(data=>this.product=data)
  }

}
