import { Directive,ElementRef,HostListener } from "@angular/core";

@Directive({
    selector: '[changeColOnHover]'
})

export class ColorDirective{
    constructor(private eleRef:ElementRef){}

    @HostListener('mouseover') onMouseOver(){
        this.changeColor('#B2D732');
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.changeColor('');
    }

    private changeColor(color:string){
        this.eleRef.nativeElement.style.background = color;
    }

}