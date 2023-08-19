import { Component, OnInit } from '@angular/core';
import {Enfant} from "../../models/enfant";

@Component({
  selector: 'app-tab-enfant',
  templateUrl: './tab-enfant.component.html',
  styleUrls: ['./tab-enfant.component.css']
})
export class TabEnfantComponent implements OnInit {
  enfants: Enfant[] = [
    new Enfant(
      'Jerry',
      'Smith',
      new Date('2005-03-15'),
      '0123456789',
      'garçon',
      [
        { name: 'Instagram', iconUrl: 'https://cdn-icons-png.flaticon.com/512/3670/3670274.png', address: 'https://www.instagram.com/alice', editable: false },
        { name: 'Twitter', iconUrl: 'https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png', address: 'https://twitter.com/alice', editable: false }
      ],
      'https://cdn-icons-png.flaticon.com/512/1075/1075124.png'
    ),
    new Enfant(
      'Robin',
      'Smith',
      new Date('2007-08-22'),
      '9876543210',
      'garçon',
      [
        { name: 'Facebook', iconUrl: 'https://cdn-icons-png.flaticon.com/256/20/20673.png', address: 'https://www.facebook.com/bob', editable: false },
        { name: 'Instagram', iconUrl: 'https://cdn-icons-png.flaticon.com/512/3670/3670274.png', address: 'https://www.facebook.com/bob', editable: false },
        { name: 'Twitter', iconUrl: 'https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png', address: 'https://twitter.com/bob', editable: false }
      ],
      'https://cdn-icons-png.flaticon.com/512/3884/3884864.png'
    ),
    new Enfant(
      'Alice',
      'Smith',
      new Date('2010-05-10'),
      '5555555555',
      'fille',
      [
        { name: 'Instagram', iconUrl: 'https://cdn-icons-png.flaticon.com/512/3670/3670274.png', address: 'https://www.instagram.com/catherine', editable: false },
        { name: 'LinkedIn', iconUrl: 'https://cdn-icons-png.flaticon.com/512/1384/1384014.png', address: 'https://www.linkedin.com/catherine', editable: false }
      ],
      'https://cdn-icons-png.flaticon.com/512/3362/3362093.png'
    )
  ];
  editedIndex: number | null = null;
  selectedEnfant: Enfant | undefined;
  getIconUrl(network: string): string {
    switch (network) {
      case 'Facebook':
        return 'url_de_l_icone_facebook';
      case 'Twitter':
        return 'url_de_l_icone_twitter';
      case 'Instagram':
        return 'url_de_l_icone_instagram';
      default:
        return 'url_par_defaut_pour_les_reseaux_inconnus';
    }
  }
  selectEnfant(enfant: Enfant) {
    this.selectedEnfant = enfant;
  }
  editAddress(index: number) {
    this.editedIndex = index; // Activer l'édition pour la ligne sélectionnée
  }

  saveAddress(index: number) {
    if (this.selectedEnfant) {
      this.selectedEnfant.reseaux_sociaux[index].editable = false;
      this.editedIndex = null; // Désactiver l'édition après avoir sauvegardé
    }
  }

  deleteNetwork(index: number) {
    if (this.selectedEnfant) {
      this.selectedEnfant.reseaux_sociaux.splice(index, 1);
    }
  }

  addNetwork() {
    if (this.selectedEnfant) {
      this.selectedEnfant.reseaux_sociaux.push({
        name: '',
        iconUrl: '',
        address: '',
        editable: true
      });
    }
  }
  onSubmit() {
    if (this.selectedEnfant) {
      const index = this.enfants.findIndex(enfant => enfant === this.selectedEnfant);
      if (index !== -1) {
        this.enfants[index] = this.selectedEnfant;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.selectedEnfant= this.enfants[0];
  }

}
