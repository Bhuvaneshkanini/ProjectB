import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { products } from '../addproduct/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  getProduct():Observable<products[]>
  {
    return this.http.get<products[]>("https://localhost:44386/"+"api/Product")
  }

}
