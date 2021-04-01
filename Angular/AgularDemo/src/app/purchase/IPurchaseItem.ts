import { IProduct } from '../products/IProduct';
export interface IPurchaseItem{
    Purchase_ID : number,
    Purchase_Name : string,
    Purchase_Date : string,
    VendorName : string,
    Items : IProduct[]
}