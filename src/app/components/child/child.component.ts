import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck {
  @Input() userName = '';
  @Input() adminUser = { name: '', role: '' };

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngChanges triggered', changes);

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
    console.log('ngDoCheck triggered', this.adminUser);
  }
}
