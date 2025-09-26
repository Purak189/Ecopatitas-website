import { Component, HostListener } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { IProduct } from '../../models/IProduct';
import { ICategory } from '../../models/ICategory';
import { ViewportScroller } from '@angular/common';
import { PRODUCTS, SERVICES_MODAL } from "../../constants/services";
import { ModalService } from "../../services/modal.service";


@Component({
  selector: 'app-dv-products-list-section',
  templateUrl: './dv-products-list-section.component.html',
  styleUrls: ['./dv-products-list-section.component.scss']
})
export class DvProductsListSectionComponent {
  isVisible: boolean = false;
  isExpanded = false;
  itemsPerPage: number = 12;
  currentPage: number = 0;
  products: any[] = PRODUCTS;
  filteredProducts: IProduct[] = this.products;

  customerId: string = '68af8877e4e829b16d263f0a';
  productUrl = 'https://dilvant-crm-engine-ade3b74c37c3.herokuapp.com/api/product-uploads?customer=';

  categories: any[] = [];
  currentSlide = 0;
  itemsPerSlide = 12;
  showControls: boolean = true;

  selectedCategories: ICategory[] = [];

  selectedCategory = this.categories[0];

  showModal: boolean = false;

  constructor(
    private _router: Router,
    private http: HttpClient,
    private viewportScroller: ViewportScroller,
    private modal: ModalService
  ) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateItemsPerPage();
  }

  ngOnInit(): void {
    this.updateItemsPerPage();
    this.fetchProducts();
  }

  toggleCategories() {
    this.isExpanded = !this.isExpanded;
  }

  filterProducts() {
    if (this.selectedCategories.length === 0) {
      this.filteredProducts = this.products;
    } else {
      const selectedCategoryNames = this.selectedCategories.map(category => category.name.toLowerCase());
      this.filteredProducts = this.products.filter(product =>
        selectedCategoryNames.includes((product.category || '').trim().toLowerCase())
      );
    }
  }
  updateItemsPerPage() {
    if (window.innerWidth <= 768) {
      this.itemsPerPage = 4;
      this.itemsPerSlide = 4;
    } else {
      this.itemsPerPage = 12;
      this.itemsPerSlide = 12;
    }
    this.currentPage = 0;
  }


  get visibleProducts(): IProduct[] {
    const start = this.currentSlide * this.itemsPerSlide;
    const end = start + this.itemsPerSlide;
    return this.filteredProducts.slice(start, end);
  }

  toggleCategory(category: ICategory) {
    const index = this.selectedCategories.indexOf(category);

    if (index === -1) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories.splice(index, 1);
    }

    this.filterProducts();
    this.currentSlide = 0;
    this.showControls = this.filteredProducts.length > this.itemsPerSlide;
  }

  navigateTo(url: string) {
    this._router.navigate([url]);
  }


  fetchProducts() {
    this.http.get<{ success: boolean; result: IProduct[] }>(this.productUrl + this.customerId).subscribe({
      next: (data) => {
        this.products = data.result.map((product: IProduct) => ({
          ...product,
          name: this.capitalizeTitle(product.name),
          image: product.images[0],
          category: product.category?.trim()
        }));

        this.filteredProducts = this.products;

        this.categories = this.getCategories();

        console.log('categories', this.products);
      },
      error: (err) => {
        console.error('Error al obtener los productos:', err);
      }
    });
  }

  getCategories(): { name: string; selected: boolean }[] {
    const categories = this.products
      .map(product => product.category?.trim().toLowerCase())
      .filter(category => category);

    const uniqueCategories = Array.from(new Set(categories));

    return uniqueCategories.map(category => ({
      name: category,
      selected: false
    }));
  }


  openModal(service: any) {
    this.modal.modalOpen(service);
  }

  changePages(page: number) {
    this.currentPage = page;
  }

  get totalSlides() {
    return Math.ceil(this.filteredProducts.length / this.itemsPerSlide);
  }
  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.totalSlides - 1;
    }
    this.scrollToProducts();
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
    this.scrollToProducts();
  }

  scrollToProducts() {
    this.viewportScroller.scrollToAnchor('product-start');
  }

  capitalizeTitle(title: string): string {
    const lowerCased = title.toLowerCase();
    return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
  }

  // quote(product: string) {
  // 	const phoneNumber = '51980699449';
  // 	const message = `Hola, quisiera cotizar sobre el producto: ${encodeURIComponent(product)}`;
  // 	const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  // 	window.open(whatsappUrl, '_blank');
  // }

  openWhatsapp(item: any) {
    const phoneNumber = '51971559901';
    const message = `Hola, quisiera comprar el producto: ${item}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  protected readonly cards = PRODUCTS;
}
