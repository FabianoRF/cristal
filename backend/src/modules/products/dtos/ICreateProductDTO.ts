export default interface ICreateProductDTO {
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  max_parcels: number;
  image_url: string;
}
