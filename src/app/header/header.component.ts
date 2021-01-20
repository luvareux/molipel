import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  mobile = false;
  ngOnInit(): void {
    if (window.innerWidth < 768) { // 768px portrait
      this.mobile = !this.mobile;
      
    }
  }
  show = true;
  showMenu() {
    this.show = !this.show;
  }

}
