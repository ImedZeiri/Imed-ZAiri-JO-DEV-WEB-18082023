import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }
  activeTab: number = 1;

  showTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }
  ngOnInit(): void {
  }

}
