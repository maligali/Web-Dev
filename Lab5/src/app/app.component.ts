import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

interface Product {
  name: string;
  description: string;
  rating: number;
  likes: number;
  image: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories = ['Красота и здоровье','Одежда', 'Украшения', 'Досуг, книги'];
  selectedCategory = 'Products';

  likedProducts = new Set<string>();

  products: Record<string, Product[]> = {
    'Красота и здоровье':[
      {
      image: 'assets/ollin.png',
      name: 'Ollin Professional Perfect Hair 15 в 1 крем-спрей 250 мл',
      description: 'Уникальное многофункциональное средство заменит вам целых 15 продуктов для ухода за волосами.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-krem-sprei-250-ml-100008645/?c=750000000',
      likes: 3374
      },
      {
        image: 'assets/miss.jpeg',
        name: 'MISS TAIS Mauve карандаш коричневый №765',
        description: 'Сочетание идеальной гипоаллергенной формулы и деревянного корпуса из калифорнийского кедра делает нанесение макияжа не только комфортным, но и предпочтительным для женщин, обладающих чувствительной кожей или, например, носящих контактные линзы.',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/miss-tais-mauve-karandash-korichnevyi-765-100155528/?c=750000000',
        likes: 580
      },
      {
        image: 'assets/loreal.jpg',
        name: 'Тушь для ресниц Loreal Paris Telescopic Explosion для объема, удлиняющая черный',
        description: 'Удлиняющая тушь от LOreal Paris с гибкой пластиковой щеточкой-расческой для густых, объемных и мягких ресниц.',
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/loreal-paris-telescopic-explosion-dlja-ob-ema-udlinjajuschaja-chernyi-17400312/?c=750000000',
        likes: 1293
      },
      {
        image: 'assets/axis.jpg',
        name: 'AXIS-Y сыворотка Dark Spot Correcting Glow для лица 50 мл',
        description: 'Корректирующая сыворотка Dark Spot Correcting Glow Serum против нарушения пигментации зарядит вашу кожу энергией, тонизирует кожу изнутри, а также выравнивает тон лица.',
        rating: 4.6,
        link: 'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-dlja-litsa-50-ml-104067981/?c=750000000',
        likes: 903
      },
      {
        image: 'assets/splat.jpg',
        name: 'SPLAT зубная паста Биокальций 100 мл',
        description: 'Зубная паста Биокальций разработана SPLAT Professional для восстановления эмали и снижения чувствительности зубов. Она насыщает зубы природным кальцием, укрепляя их и восстанавливая поврежденные участки.',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/splat-zubnaja-pasta-biokal-tsii-100-ml-100194771/?c=750000000',
        likes: 134
      },
    ],
    'Одежда': [
      {
        image: 'assets/white.jpeg',
        name: 'Футболка Skims Без белый',
        description: 'Базовая белая футболка Skims, размер стандарт, красиво подчеркивает вашу фигуру. Размерная сетка (xs,m).',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/futbolka-skims-bez-161024-568-belyi-40-128958124/?c=750000000',
        likes: 19
        },
        {
          image: 'assets/gb.jpg',
          name: 'Пижама черный, белый',
          description: 'Комплект одежды для и сна. Очень приятная ткань, красивый принт. На подарок самое то. Побалуйте себя прекрасным.',
          rating: 4.7,
          link: 'https://kaspi.kz/shop/p/pizhama-18007506-229546481-chernyi-belyi-50-52-122709641/?c=750000000',
          likes: 206
        },
        {
          image: 'assets/long.jpeg',
          name: 'Лонгслив iu brand бордовый',
          description: 'Красивый красный лонгслив',
          rating: 4.5,
          link: 'https://kaspi.kz/shop/p/longsliv-iu-brand-0001-bordovyi-s-129363594/?c=750000000',
          likes: 104
        },
        {
          image: 'assets/bla.jpg',
          name: 'Футболка черный',
          description: 'Эта постиранная хлопковая футболка изготовлена из высококачественного хлопка. Ткань очень мягкая и приятная для кожи, свободная, дышащая и удобная в носке.',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/futbolka-730323194-chernyi-m-118737283/?c=750000000',
          likes: 345
        },
        {
          image: 'assets/n.jpg',
          name: 'Носки TAPEDESIGN TDW_00 1 пара белый 37-43',
          description: 'Крутые носки',
          rating: 5,
          link: 'https://kaspi.kz/shop/p/noski-tapedesign-tdw-00-1-para-belyi-37-43-116227948/?c=750000000',
          likes: 13
        },
    ],
    'Украшения': [
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/hfd/84932970020894.jpg?format=preview-large',
          name: 'Пусеты белый бижутерный сплав, акрил',
          description: 'Красивые пусеты.',
          rating: 4.6,
          link: 'https://kaspi.kz/shop/p/pusety-belyi-bizhuternyi-splav-akril-115934139/?c=750000000',
          likes: 324
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h0f/84939931189278.jpg?format=preview-large',
          name: 'Кольцо размер регулируемый бижутерный сплав, перламутр',
          description: 'Универсальное кольцо',
          rating: 4.6,
          link: 'https://kaspi.kz/shop/p/kol-tso-razmer-reguliruemyi-bizhuternyi-splav-perlamutr-115959663/?c=750000000',
          likes: 432
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h46/81270775021598.jpg?format=preview-large',
          name: 'Серьги Лепестки бижутерный сплав, без вставок',
          description: 'Красивые бюджетные серьги.',
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/ser-gi-lepestki-bizhuternyi-splav-bez-vstavok-110853997/?c=750000000',
          likes: 336
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hfc/hfd/85364067565598.png?format=preview-large',
          name: 'Серьги бижутерный сплав, искусственный жемчуг',
          description: 'Порадуйте вторую половинку.',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/ser-gi-bizhuternyi-splav-iskusstvennyi-zhemchug-115226092/?c=750000000',
          likes: 108
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h67/84553911664670.jpg?format=preview-large',
          name: 'Серьги Жемчужное сердце нержавеющая сталь,',
          description: 'Прекрасный подарок на 8 марта.',
          rating: 4.5,
          link: 'https://kaspi.kz/shop/p/ser-gi-zhemchuzhnoe-serdtse-nerzhavejuschaja-stal-iskusstvennyi-zhemchug-114776487/?c=750000000',
          likes: 756
        },
    ],
    'Досуг, книги' : [
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=preview-large',
        name: 'Клир Д.: Атомные привычки',
        description: 'Лучшая деловая книга 2018 года по версии Fast Company.Лучшая книга по самопомощи 2018 года по версии Business Insider.',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000',
        likes: 193
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h1b/63846893322270.jpg?format=preview-large',
        name: 'Спаркс Н.: Спеши любить',
        description: 'Тихий городок Бофор. Каждый год Лэндон Картер приезжает сюда, чтобы вспомнить историю своей первой любви… ',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/sparks-n-speshi-ljubit--100259730/?c=750000000',
        likes: 72
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h79/hdb/64393305358366.jpg?format=preview-large',
        name: 'Круглая липучка 51840 15 мм 100 пар',
        description: 'Круглая липучка',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/kruglaja-lipuchka-51840-15-mm-100-par-107218270/?c=750000000',
        likes: 353
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/hf8/64312482824222.jpg?format=preview-large',
        name: 'Touch Cool 134330 60 шт',
        description: 'Набор из 60-ти двусторонних маркеров для скетчинга.',
        rating: 4.5,
        link: 'https://kaspi.kz/shop/p/touch-cool-134330-60-sht-101724576/?c=750000000',
        likes: 512
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/h20/83821428047902.jpg?format=preview-large',
        name: 'Набор обучающих книг на казахском языке',
        description: 'Добро пожаловать в мир увлекательного обучения с набором обучающих книг на казахском языке! Этот набор включает в себя 4 книги, специально разработанные для детей от 3 лет. ',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/nabor-obuchajuschih-knig-na-kazahskom-jazyke-113363556/?c=750000000',
        likes: 38
      },
    ]
  };

  get currentProducts(): Product[] {
    return this.products[this.selectedCategory] || [];
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }


  likeProduct(productName: string) {
    const product = this.products[this.selectedCategory].find(p => p.name === productName);
    if (!product) return;

    if (this.likedProducts.has(productName)) {
      product.likes--;
      this.likedProducts.delete(productName);
    } else {
      product.likes++;
      this.likedProducts.add(productName);
    }
  }

  removeProduct(index: number) {
    this.products[this.selectedCategory].splice(index, 1);
  }

  share(link: string) {
    const message = encodeURIComponent(`Check this product: ${link}`);
    window.open(`https://t.me/share/url?url=${link}&text=${message}`, '_blank');
  }

}
