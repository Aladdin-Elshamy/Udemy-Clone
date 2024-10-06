export interface IImage {
    title: string,
    url: string[]
}

export interface ISlide{
    image: IImage;
    imageIndex: number;
    index: number;
}

export interface ICategory {
    category: string,
      subcategories: 
        {
          subcategory: string
          topics?: string[]
        }[] 
}
export interface ILoginData {
    type:string
    name:string
    id:string
    label:string
    validation?:{
        required:boolean
        pattern?:RegExp
        message?:string

    }
}

export interface ILogin {
  email: string;
  password: string;
}