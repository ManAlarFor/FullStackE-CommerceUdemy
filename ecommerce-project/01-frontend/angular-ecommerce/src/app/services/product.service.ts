import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  private baseUrl = 'http://localhost:8080/api/products';

  private categoryUrl = 'http://localhost:8080/api/product-category';

  constructor(private httpClient: HttpClient) { }

  getProductListPaginate(Page:number,
                        PageSize:number,
                        CategoryId: number): Observable<GetResponseProducts> {

    // need to build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${CategoryId}`
                    + `&page=${Page}&size=${PageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl) ;
  }

  getProductList(CategoryId: number): Observable<Product[]> {

    // need to build URL based on category id 
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${CategoryId}`;

    return this.getProducts(searchUrl);
  }

  searchProducts(Keyword: string): Observable<Product[]> {

    // need to build URL based on  keyword 
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${Keyword}`;

    return this.getProducts(searchUrl);
  }

  searchProductsPaginate(Page:number,
                        PageSize:number,
                        keyword: string): Observable<GetResponseProducts> {

    // need to build URL based on keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${keyword}`
    + `&page=${Page}&size=${PageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl) ;
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

  getProduct (ProductId: number): Observable<Product> {

    const productUrl = `${this.baseUrl}/${ProductId}` ;

    return this.httpClient.get<Product>(productUrl) ;

  }

  

}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
  page: {
    size: number ;
    totalElements: number ;
    totalPages: number;
    number:number;
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}