import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input() userName = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngChanges triggered', changes);

    if (changes['userName'].isFirstChange()) {
      this.userName = 'Hello ' + this.userName;
      return;
    }

    this.userName = 'Hi ' + this.userName;
  }
}
