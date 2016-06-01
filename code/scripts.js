class Adresse{
  constructor(numero, rue, codePostal){
    this.numero = numero;
    this.rue = rue;
    this.codePostal = codePostal;
  }
}

class Etablissement{
  constructor(type1, adresse, description, points){
    this.type1 = type1;
    this.adresse = adresse;
    this.description = description;
    this.points = points;
  }
}
