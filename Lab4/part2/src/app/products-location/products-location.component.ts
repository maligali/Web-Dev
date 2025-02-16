import { Component, Input } from '@angular/core';
import { Productslocation } from '../productslocation';
@Component({
  selector: 'app-products-location',
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="productsLocation.photo"
        alt="Exterior photo of {{ productsLocation.name }}"
        crossorigin
      />
      <a [href]="productsLocation.url" target="_blank" class="product-name">{{ productsLocation.name }}</a>
      <p class="listing-location">{{ productsLocation.description }} <br> {{ productsLocation.rating }} </p>
      <a [href]="productsLocation.share" target="_blank" class="product-share"> 📲 Поделиться в WhatsApp </a>
      </section>
  `,
  styleUrls: ['./products-location.component.css']
})
export class ProductsLocationComponent {
  @Input() productsLocation!: Productslocation;
}
