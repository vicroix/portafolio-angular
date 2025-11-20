import { Directive, ElementRef, HostBinding, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appearOnScroll]'
})
export class AppearOnScrollDirective implements OnInit, OnDestroy {

  @HostBinding('class.appear-visible') isVisible = false;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;         
          this.observer.unobserve(this.el.nativeElement); 
        }
      });
    }, { threshold: 0.2 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
