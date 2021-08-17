import {Model, ModelInterface} from '../model/model';

export class Service {

  async createUser(id: string, nom: string, prenom: string, photo: string) {
    const model = new Model(id, nom, prenom, photo);
    console.log(model);
    const response = await fetch("https://c1.cleverapps.io/collegues", {
      method: "post",
      body: JSON.stringify(model),
      headers: {"Content-Type": "application/json"}
    });
    const data = await response.json();
  }

  async findAllUsers(): Promise<ModelInterface[]> {
    const response = await fetch("https://c1.cleverapps.io/collegues");
    const data: ModelInterface[] = await response.json();

    return data;
  }

}
