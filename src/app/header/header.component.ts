import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean;


  constructor() { }

  ngOnInit() {
    this.isOpen = true;
  }

  closeOnClick() {
    this.isOpen = false;
  }
}
