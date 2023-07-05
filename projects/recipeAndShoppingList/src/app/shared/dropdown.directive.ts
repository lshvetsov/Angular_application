import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') dropdownOpen: boolean = false;

  @HostListener('document:click', ['$event'])
  onDropdownClick(event:Event) {
    this.dropdownOpen = this.elRef.nativeElement.contains(event.target) ? !this.dropdownOpen : false;
    // this.dropdownOpen = !this.dropdownOpen;
  }

  constructor(private elRef: ElementRef) {}

}
