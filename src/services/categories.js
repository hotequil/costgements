export class Categories{
  #categories = ["Ecommerce", "Crowdfunding", "CRM", "ERP"]

  get(){
    return new Promise(resolve => setTimeout(() => resolve(this.#categories), 2000))
  }
}
