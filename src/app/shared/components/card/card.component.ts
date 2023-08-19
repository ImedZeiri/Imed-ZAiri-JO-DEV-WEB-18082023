import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Enfant} from "../../../models/enfant";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() nomEnfant: any = ''; // Propriété pour le nom du parent
  @Output() enfantSelected = new EventEmitter<Enfant>();

  onClick() {
    if (this.nomEnfant) {
      this.enfantSelected.emit(this.nomEnfant);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}
