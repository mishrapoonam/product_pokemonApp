import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.services';
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

  ngOnInit(): void {
    this.productList(this.limitVal, this.offSetVal);
  }

  public productList(limit, offset){
    this.pdServcie.getProductList(limit, offset).subscribe((response)=>{
      this.product = response;
      this.productListDetails = this.product.results;
      this.productCount = this.product.count;
      this.prevLink = this.product.previous;
      this.nextLink = this.product.next;
    });
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
