export interface IProduct {
  id:	number,
  subjectId: number,
  subjectParentId: number,
  name?: string,
  brand?: string,
  brandId: number,
  siteBrandId: number,
  supplierId: number,
  sale: number,
  priceU?: string,
  salePriceU: number,
  rating: number,
  feedbacks: number,
  colors:	Colors[],
  photo?: string
}

export interface IGraph {
  date: string,
  amount: number
}

export interface IProductResult extends IProduct{
  Номенклатура?:	number,
  Бренд?: string,
  Цена?: string,
  Название?: string,
  Фото?: string,
  График?: IGraph[]
}

export interface IProductPhoto {
  [key: number]: string;
}

interface Colors {
  name: string
}