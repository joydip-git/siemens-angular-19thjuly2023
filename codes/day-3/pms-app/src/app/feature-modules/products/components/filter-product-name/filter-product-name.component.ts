import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-product-name',
  templateUrl: './filter-product-name.component.html',
  styleUrls: ['./filter-product-name.component.css']
})
export class FilterProductNameComponent {
  filterText = ''
  @Output('filterValueChanged') filterTextChanged: EventEmitter<string> = new EventEmitter<string>()

  updateFilterText(val: string) {
    this.filterText = val;
    this.filterTextChanged.emit(this.filterText)
  }
}
