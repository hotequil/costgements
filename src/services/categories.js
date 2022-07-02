export class Categories{
  #categories = ["Ecommerce", "Crowdfunding", "CRM", "ERP"]

  get(){
    return new Promise(resolve => resolve(this.#categories))
  }
}
