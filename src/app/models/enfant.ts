export class Enfant{
  constructor(
    nom: string,
    prenom: string,
    dateNaissance: Date,
    tel: string,
    genre: string,
    reseaux_sociaux: { name: string; iconUrl: string; address: string; editable: boolean; }[],
    imageUrl: string
  ) {
    this.non=nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.tel = tel;
    this.genre = genre;
    this.reseaux_sociaux = reseaux_sociaux;
    this.imageUrl = imageUrl;
  }

  non:string ='';
  prenom:string='';
  dateNaissance:Date= new Date();
  tel:string='';
  genre:string='';
  reseaux_sociaux: { name: string; iconUrl: string; address: string; editable: boolean; }[] = [];
  imageUrl: string = '';
}
