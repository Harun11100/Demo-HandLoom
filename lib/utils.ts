import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
const consumerKey ='ck_de57581726d1a47bd1dd1de08bcbf57ae13fc170'
const consumerSecret ='cs_d723d007075477f0bfa2854f940c3fa706e9771c'
const baseUrl ='https://www.handloom.store/wp-json/wc/v3/products'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const fetchProducts = async () => {
  const authString = btoa(`${consumerKey}:${consumerSecret}`);
  
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: `Basic ${authString}`,
    },
  });
  
  if (response.ok) {
    const products = await response.json();
    return products;
  } else {
    console.error('Error fetching products:', response.statusText);
  }
};


