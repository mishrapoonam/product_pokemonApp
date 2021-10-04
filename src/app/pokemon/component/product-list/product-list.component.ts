import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.services';
import { Product } from '../../models/product.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor( private pdServcie : ProductService, private router: Router) { }

  public product: Product;
  public productListDetails : any [];
  public productCount : number = 0;
  public prevLink : string = '';
  public nextLink : string = '';
  public limitVal : number = 20;
  public offSetVal : number = 0;
  public selectProductCount = [10,20,50] ;
  public selProdCount : number = this.selectProductCount[1];
  public sortByProduct = ['Name', 'Attribute'];
  public sortBy : string = '';

  ngOnInit(): void {
    this.productList(this.limitVal, this.offSetVal, false, '');
  }

  public productList(limit, offset, pagination, urlVal){
    this.pdServcie.getProductList(limit, offset, pagination, urlVal).subscribe((response)=>{
      this.product = response;
      this.productListDetails = this.product.results;
      this.productCount = this.product.count;
      this.prevLink = this.product.previous;
      this.nextLink = this.product.next;
    }, error => {
      console.log(error.message);
    });
  }

  public getPreNextPage(urlVal){
    this.productList('', '', true, urlVal);
  }

  public onChange(eve){
    this.limitVal = eve.value;
    this.productList(this.limitVal, this.offSetVal, false, '');
  }

  public onSortChange(eve){
    if(eve.value === 'Name'){
      this.productListDetails.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      this.productList(this.limitVal, this.offSetVal, false, '');
    }
  }
  public displayProductDeatil(urlVal){
    let navigationExtras: NavigationExtras = {
      state: {
        urlVal: urlVal
      }
    };
    this.router.navigate(['/productDetail'], navigationExtras);
  }


}
