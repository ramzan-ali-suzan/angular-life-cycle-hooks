import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  userName = 'Masud';

  update() {
    this.userName = 'Ramzan';
  }

  ngOnInit(): void {
    console.log('ngOnInit from the parent component');
  }
}
