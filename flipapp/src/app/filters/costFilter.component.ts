import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-cost-filter',
    templateUrl: './costfilter.component.html',
})

export class CostFilterComponent{

@Input() filterCostName:string= '';
costVal:string='';
@Output() costClicked : EventEmitter<string> = new EventEmitter<string>()

onCostSelect(): void{
    this.costClicked.emit(this.costVal);
}

}