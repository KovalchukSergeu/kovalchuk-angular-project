import {Component, HostBinding, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isFixedNavbar;
  @HostBinding('class.navbar-opened') navbarOpened = false;
  constructor(
  ) { }
  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixedNavbar = offset > 10;
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

}
