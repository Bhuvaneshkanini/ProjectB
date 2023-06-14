import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cardcomponent',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.css']
})
export class CardcomponentComponent {
  
  @Input() image: string = '';

  images1:string[]=['../assets/img/Keyboard.webp','../assets/img/Laptop.webp','../assets/img/Mouse.webp']
}
