import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  HostListener,
  ContentChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appLetterByLetter]',
})
export class LetterByLetterDirective implements AfterViewInit, OnChanges {
  @Input() isActive: boolean = true;
  private spans: HTMLElement[] = [];
  private originalText: string = '';

  @ContentChild('textSpan', { static: false }) textSpan!: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.applyEffect();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isActive'] && !changes['isActive'].firstChange) {
      this.applyEffect();
    }
  }

  private applyEffect() {
    if (!this.isActive || !this.textSpan) {
      this.resetText();
      return;
    }

    const textContent = this.textSpan.nativeElement.textContent.trim();
    if (!textContent) return;

    this.originalText = textContent;
    this.textSpan.nativeElement.textContent = '';

    this.spans = [];
    textContent.split('').forEach((letter: string) => {
      const span = this.renderer.createElement('span');
      this.renderer.setProperty(span, 'textContent', letter);
      this.renderer.setStyle(span, 'display', 'inline-block');
      this.renderer.setStyle(
        span,
        'color',
        '#ffffff'
      );
      this.renderer.setStyle(span, 'transition', 'color 0.1s ease');
      this.textSpan.nativeElement.appendChild(span);
      this.spans.push(span);
    });
  }

  private resetText() {
    if (this.originalText) {
      this.textSpan.nativeElement.textContent = this.originalText;
      this.spans = [];
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.isActive) return;
    this.spans.forEach((span, index) => {
      this.renderer.setStyle(span, 'transitionDelay', `${index * 0.1}s`);
      this.renderer.setStyle(span, 'color', 'white');
    });
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (!this.isActive) return;
    this.spans
      .slice()
      .reverse()
      .forEach((span, index) => {
        this.renderer.setStyle(span, 'transitionDelay', `${index * 0.1}s`);
        this.renderer.setStyle(
          span,
          'color',
          '#ffffff'
        );
      });
  }
}
