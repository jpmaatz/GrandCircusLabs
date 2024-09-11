import axios from "axios"
import { Product } from '../Product'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}