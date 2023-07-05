import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";
import {Event} from "@angular/router";

@Directive({
  selector: '[betterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // @ts-ignore
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.backgroundColor = this.highlightColor;

  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
