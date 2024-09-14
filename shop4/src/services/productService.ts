import axios from "axios"
import { Product } from '../interfaces/Product'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchProducts(): Promise<Product[]> {
  const response = await axios.get(`${API_BASE_URL}/products`);
  console.log(response.data)
  return response.data;
}