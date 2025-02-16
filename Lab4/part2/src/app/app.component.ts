import {Component} from '@angular/core';
import {ProductsComponent} from './products/products.component';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.png" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
      </section>
      <app-products></app-products>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'products';
}
