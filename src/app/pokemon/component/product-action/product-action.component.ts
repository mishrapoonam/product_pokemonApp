import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-action',
  templateUrl: './product-action.component.html',
  styleUrls: ['./product-action.component.css']
})
export class ProductActionComponent{

  @Input() prevLink : string;
  @Input() nextLink : string;
  @Input() sortFeature : boolean = true;
  @Output() onCountChange = new EventEmitter<string>();
  @Output() onSortTypeChange = new EventEmitter<string>();
  @Output() onPreNextPage = new EventEmitter<string>();

  public selectProductCount = [10,20,50] ;
  public selProdCount : number = this.selectProductCount[1];
  public sortByProduct = ['Name', 'Attribute'];
  public sortBy : string = '';

  onChange(eve){
      this.onCountChange.emit(eve);
  }

  onSortChange(eve){
    this.onSortTypeChange.emit(eve);
  }

  getPreNextPage(eve){
    this.onPreNextPage.emit(eve);
  }

}
