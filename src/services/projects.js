import { env } from "../env";
import { ok, requestConfig } from "../helpers/requests";

export class Projects{
  create(project){
    return ok(fetch(`${env.API}/projects`, requestConfig("POST", { body: JSON.stringify(this.#generateModel(project)) })))
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
