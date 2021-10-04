import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private defaultUrl: string  = 'https://pokeapi.co/api/v2/pokemon?';

  constructor(private http: HttpClient) { }

  public getProductList(limitVal, offSetVal): Observable<any> {
    let url =  `${this.defaultUrl}limit=${limitVal}&offset=${offSetVal}`;
    let productList =  this.http.get<any>(url);
    return productList;
  }

  public getProductDetail(param) : Observable<any> {
    let productDeatils =  this.http.get<any>(param.urlVal);
    return productDeatils;
  }

}
