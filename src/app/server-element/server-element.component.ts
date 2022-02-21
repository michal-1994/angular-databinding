import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  // @ViewChild('heading') header: ElementRef; // older version
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
    console.log('%cText content of paragraph: ', this.paragraph.nativeElement.textContent, 'color: green; font-size: 36px;');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('%cText content: ', this.header.nativeElement.textContent, 'color: red; font-size: 40px;');
  }

  ngDoCheck() {
    console.log('%cngDoCheck called', 'color: green; font-size: 20px;');
  }

  ngAfterContentInit() {
    console.log('%cngAfterContentInit called', 'color: red; font-size: 20px;');
    console.log('%cText content of paragraph: ', this.paragraph.nativeElement.textContent, 'color: green; font-size: 36px;');
  }

  ngAfterContentChecked() {
    console.log('%cngAfterContentChecked called', 'color: brown; font-size: 20px;')
  }

  ngAfterViewInit() {
    console.log('%cngAfterViewInit called', 'color: yellow; font-size: 20px;');
    console.log('%cText content: ' + this.header.nativeElement.textContent, 'color: red; font-size: 40px;');
  }

  ngAfterViewChecked() {
    console.log('%cngAfterViewChecked called', 'color: pink; font-size: 20px;')
  }

  ngOnDestroy() {
    console.log('%cngOnDestroy called', 'color: purple; font-size: 20px;')
  }

}
