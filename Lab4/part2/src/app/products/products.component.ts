import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductsLocationComponent } from '../products-location/products-location.component';
import { Productslocation } from '../productslocation';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductsLocationComponent],
  template: `
    <section>
      <form>
      </form>
    </section>
    <section class="results">
    <app-products-location *ngFor="let product of productsLocation" 
  [productsLocation]="product"></app-products-location>
    </section>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsLocation: Productslocation[] = [    {
    id: 1,
    name: 'Apple iPhone 13 128Gb глянцевый черный',
    description: 'Получил дисплей 6.1 дюйма Super Retina XDR, отличается высокой плотностью пикселей.',
    rating: '4.5★',
    photo: 'assets/iphone13.jpg',
    availableUnits: 273970,
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000" 
  },
  {
    id: 2,
    name: 'Apple iPhone 16 Pro Max 256Gb черный',
    description: 'Это самое производительное устройство в линейке Apple iPhone.',
    rating: '5.0★',
    photo: 'assets/iphone16pro.jpg',
    availableUnits: 651302,
    url: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000"  
  },
  {
    id: 3,
    name: 'Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
    description: 'Данная модель оснащена IPS-дисплеем 6,74” с частотой обновления 90 Гц.',
    rating: '4.3★',
    photo: 'assets/xiaomi.jpg',
    availableUnits: 651302,
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000"  
  },
  {
    id: 4,
    name: 'Apple iPhone 16 Pro Max 256Gb золотистый',
    description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. ',
    rating: '4.9★',
    photo: 'assets/gold.jpg',
    availableUnits: 651302,
    url: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000"
  },
  {
    id: 5,
    name: 'Apple iPhone 16 128Gb матовый черный',
    description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18.',
    rating: '4.8★',
    photo: 'assets/16.jpg',
    availableUnits: 651302,
    url: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000"
  },
  {
    id: 6,
    name: 'Apple iPhone 16 Pro 256Gb черный',
    description: 'iPhone 16 Pro – это уникальный смартфон от Apple. Флагманская модель линейки.',
    rating: '4.7★',
    photo: 'assets/iphone16pro.jpg',
    availableUnits: 651302,
    url: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000"  
  },
  {
    id: 7,
    name: 'Apple iPhone 16 Pro Max 256Gb серебристый',
    description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
    rating: '4.9★',
    photo: 'assets/silver.jpg',
    availableUnits: 651302,
    url: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000"
  },
  {
    id: 8,
    name: 'Realme Note 50 3 ГБ/64 ГБ черный',
    description: 'Смартфон Realme Note 50 диагональю 6.7" выполнен в голубом корпусе по IP54.',
    rating: '4.6★',
    photo: 'assets/redmi.jpg',
    availableUnits: 651302,
    url: 'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000"
  },
  {
    id: 9,
    name: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий',
    description: 'На сегодня это топовая модель линейки, получившая значительные улучшения.',
    rating: '4.9★',
    photo: 'assets/samsung.jpg',
    availableUnits: 651302,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000"
   },
  {
    id: 10,
    name: 'Samsung Galaxy A25 5G 6 ГБ/128 ГБ темно-синий',
    description: 'У Galaxy A25 отсутствует официальная защита от воды и пыли.',
    rating: '4.6★',
    photo: 'assets/samsung2.jpg',
    availableUnits: 651302,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/samsung-galaxy-a25-5g-6-gb-128-gb-temno-sinii-115937459/?c=750000000"
   },
  {
    id: 11,
    name: 'Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий',
    description: 'Новый Samsung Galaxy A35 – это смартфон средней ценовой категории.',
    rating: '4.7★',
    photo: 'assets/samsung3.jpg',
    availableUnits: 651302,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000" 
  },
  {
    id: 12,
    name: 'Samsung Galaxy A06 6 ГБ/128 ГБ черный',
    description: 'Расширьте возможности благодаря большому экрану Samsung Galaxy A06.',
    rating: '4.7★',
    photo: 'assets/samsung4.jpg',
    availableUnits: 651302,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000',
    share: "https://api.whatsapp.com/send?text=https://kaspi.kz/shop/p/samsung-galaxy-a06-6-gb-128-gb-chernyi-123429834/?c=750000000"  
  }
];
}
