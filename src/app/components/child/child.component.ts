import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {

  @Input() userName = '';
  @Input() adminUser = { name: '', role: '' };

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('content') content!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngChanges triggered', changes);

    // if (changes['userName'].isFirstChange()) {
    //   this.userName = 'Hello ' + this.userName;
    //   return;
    // }

    // this.userName = 'Hi ' + this.userName;
  }

  ngOnInit(): void {
    // console.log('ngOnInit from the child component');
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck triggered', this.adminUser);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - content', this.content);
  }
}
