import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type PropTypes = { product: Product };

const ProductCard = ({ product }: PropTypes) => {
  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="flex items-center justify-center">
        <Image
          src={product.image}
          width={150}
          height={150}
          alt="magirata-pizza"
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between  items-center">
        <p>
          <span>From</span>
          <span className="font-bold">Rs.{product.price}</span>
        </p>

        <Dialog>
          <DialogTrigger className="bg-primary px-4 py-2 text-lg text-white rounded-md ">
            Choose
          </DialogTrigger>

          <DialogContent className="max-w-3xl p-0">
            <div className="flex ">
              <div className="w-1/3 bg-white rounded-md p-8 flex items-center justify-center">
                <Image
                  src={product.image}
                  width={150}
                  height={150}
                  alt="magirata-pizza"
                />
              </div>
              <div className="w-2/3 p-8">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="mt-1">{product.description}</p>
                 
                <div className="py-10">
                <Button className="bg-primary px-4 py-2 text-white rounded-md" >Buy Now</Button>
                </div>

              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
