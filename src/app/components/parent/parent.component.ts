import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  userName = 'Masud';
  adminUser = { name: 'Zafor', role: 'admin' };

  update() {
    this.userName = 'Ramzan';
    this.adminUser.role = 'superAdmin';
  }

  ngOnInit(): void {
    // console.log('ngOnInit from the parent component');
  }
}
