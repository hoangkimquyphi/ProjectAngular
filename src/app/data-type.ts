export interface signUp {
  username: string,
  email: string,
  full_name: string,
  phone: string,
  address: string,
  gender: string,
  birthday: Number,
  password: string,
  password_confirmation: string,
}
export interface login {
  email: string;
  password: string;
}

export interface product{
  name:string,
  price:number,
  category_id:string,
  color:string,
  image_url:string,
  description:string,
  material:string,
  brand:string,
  id:number,
  quantity:undefined | number,
  productId:undefined|number
}
export interface cart{
  name:string,
  price:number,
  category_id:string,
  color:string,
  image_url:string,
  description:string,
  material:string,
  brand:string,
  id:number| undefined,
  quantity:undefined | number,
  productId:number,
  userId:number
}

export interface priceSummary{
  price:number,
  discount:number,
  tax:number,
  delivery:number,
  total:number
}

export interface order {
  email:string,
  address:string,
  contact:string,
  totalPrice:number,
  userId:string,
  id:number|undefined
}