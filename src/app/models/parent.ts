import {Enfant} from "./enfant";

export class Parent{
  non:string= '';
  prenom:string= '';
  email:string= '';
  dateNaissance:Date = new Date();
  tel:string= '';
  genre:string= '';
  enfants:Enfant[] = [];
}
