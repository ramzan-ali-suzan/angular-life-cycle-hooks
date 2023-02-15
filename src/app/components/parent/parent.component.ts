import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  userName = 'Masud';
  adminUser = { name: 'Zafor', role: 'admin' };
  showDynamicPtag = false;
  isChildDestroyed = false;

  update() {
    this.userName = 'Ramzan';
    this.adminUser.role = 'superAdmin';
    this.showDynamicPtag = true;
  }

  destroy() {
    this.isChildDestroyed = true;
  }

  ngOnInit(): void {
    // console.log('ngOnInit from the parent component');
  }
}
