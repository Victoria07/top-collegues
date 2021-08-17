export class Model {


  constructor(public id: string, public nom: string, public prenom: string, photo: string) {

  }

}

export interface ModelInterface {
  id: string;
  nom: string;
  prenom: string;
  photo: string;
}
