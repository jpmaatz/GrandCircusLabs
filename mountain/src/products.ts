import { Product } from "./models/Products";

const products:Product[] = [{ name: "BuzzCola", price: 50 },
    { name: "Pepsi Invisible", price: 11000 },
    { name: "Triple Red Bull Ultra", price: 3 }
]

const calcAverageProductPrice = (drinks:Product[]):number => 
    drinks.reduce((ac,nv) => ac + nv.price,0) / drinks.length

console.log(calcAverageProductPrice(products))