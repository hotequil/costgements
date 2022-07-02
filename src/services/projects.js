import { env } from "../env";
import { ok, requestConfig } from "../helpers/requests";

export class Projects{
  #url = `${env.API}/projects`

  create(project){
    return ok(fetch(this.#url, requestConfig("POST", { body: JSON.stringify(this.#generateModel(project)) })))
  }

  get(){
    return ok(fetch(this.#url, requestConfig()))
  }

  single(id){
    return ok(fetch(`${this.#url}/${id}`, requestConfig()))
  }

  delete(id){
    return ok(fetch(`${this.#url}/${id}`, requestConfig("DELETE")))
  }

  #generateModel(project){
    if(!project) project = {}

    return {
      name: project.name || null,
      budget: +project.budget || 0,
      category: project.category || null,
      services: project.services || []
    }
  }
}
