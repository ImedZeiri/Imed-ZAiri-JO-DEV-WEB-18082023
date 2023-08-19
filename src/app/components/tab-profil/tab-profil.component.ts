import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-profil',
  templateUrl: './tab-profil.component.html',
  styleUrls: ['./tab-profil.component.css']
})
export class TabProfilComponent implements OnInit {
  selectedCountry: string = 'US'; // Default selected country (ISO code)
  phoneNumber: string = '';

  countries = [
    { name: 'United States', iso: 'US', flag: '🇺🇸' },
    { name: 'Canada', iso: 'CA', flag: '🇨🇦' },
    { name: 'United Kingdom', iso: 'GB', flag: '🇬🇧' },
    { name: 'France', iso: 'FR', flag: '🇫🇷' }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
