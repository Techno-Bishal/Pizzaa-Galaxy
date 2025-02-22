import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import ProductCard, { Product } from "./components/ProductCard";

const products : Product [] = [
  {
    id: "1",
    name : "Margarita Pizza",
    description : "This is a very tasty pizza",
    image : "/magirata.png",
    price : 500
  },
  {
    id: "2",
    name : "Margarita Pizza",
    description : "This is a very tasty pizza",
    image : "/magirata.png",
    price : 500
  },
  {
    id: "3",
    name : "Margarita Pizza",
    description : "This is a very tasty pizza",
    image : "/magirata.png",
    price : 500
  },
  {
    id: "4",
    name : "Margarita Pizza",
    description : "This is a very tasty pizza",
    image : "/magirata.png",
    price : 500
  },
  {
    id: "5",
    name : "Margarita Pizza",
    description : "This is a very tasty pizza",
    image : "/magirata.png",
    price : 500
  }
]

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto md:px-40 px-4 flex py-24">
          <div className="md:w-1/2">
            <h1
              className="text-7xl font-black
          leading-2 "
            >
              Saver Delicious Pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="capitalize mt-8 max-w-lg">
              Enjoy a Free Meal if your order takes more than 45 minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full leading-snug">
              Get Your Pizza Now
            </Button>
          </div>

          <div className="md:w-1/2 ">
            <Image
              src={"/pizzaa.png"}
              width={400}
              height={400}
              alt="pizza-main"
              className="ml-auto"
            />
          </div>
        </div>
      </section>

      <section>
       <div className="container mx-auto md:px-40 px-4 py-24 ">
       <Tabs defaultValue="pizza" >
          <TabsList>
            <TabsTrigger value="pizza" className="text-md">Pizza</TabsTrigger>
            <TabsTrigger value="beverages" className="text-md">Beverages</TabsTrigger>
          </TabsList>
          <TabsContent value="pizza">
            <div className="grid  grid-cols-4 gap-6 mt-6">
            {
              products.map((product) => (
                <ProductCard product={product} key={product.id}/>
              ))
            }
            </div>
            
          </TabsContent>
          <TabsContent value="beverages">
          <div className="grid  grid-cols-4 gap-6 mt-6">
            {
              products.map((product) => (
                <ProductCard product={product} key={product.id}/>
              ))
            }
            </div>
          </TabsContent>
        </Tabs>
       </div>
      </section>
    </>
  );
}
