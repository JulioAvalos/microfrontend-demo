import {Injectable} from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {Product} from "../model/product.model";

@Injectable({providedIn: 'root'})
export class ProductService {
    private dummyProducts: Product[] = [
        {id: 1, name: 'Laptop', price: 999.99, description: 'Powerful computing', inStock: true},
        {id: 2, name: 'Smartphone', price: 699.99, description: 'Latest model', inStock: true},
        {id: 3, name: 'Headphones', price: 149.99, inStock: false},
        {id: 4, name: 'Keyboard', price: 49.99, inStock: true},
        {id: 5, name: 'Mouse', price: 29.99, description: 'Wireless ergonomic'},
    ];

    constructor() {
    }

    // Simulate getting all products with delay
    getProducts(): Observable<Product[]> {
        return of(this.dummyProducts).pipe(
            delay(1000) // Simulate network delay
        );
    }

    // Simulate getting a single product by ID
    getProductById(id: number): Observable<Product | undefined> {
        const product = this.dummyProducts.find(p => p.id === id);
        return of(product).pipe(
            delay(500) // Simulate network delay
        );
    }

    // Simulate adding a new product
    addProduct(product: Omit<Product, 'id'>): Observable<Product> {
        const newProduct = {
            ...product,
            id: Math.max(...this.dummyProducts.map(p => p.id)) + 1
        };
        this.dummyProducts = [...this.dummyProducts, newProduct];
        return of(newProduct).pipe(
            delay(800)
        );
    }
}