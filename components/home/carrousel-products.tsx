'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {Card, CardBody, CardFooter, Image} from "@heroui/react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useCart } from "@/components/cart/cart-context";

const products = [
  { id: 1, name: "Product A", price: 20, image: "/plant1.png" },
  { id: 2, name: "Product B", price: 35, image: "/plant1.png" },
  { id: 3, name: "Product C", price: 50, image: "/plant1.png" },
];


export function RandomCarousel() {
  const { addToCart } = useCart();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[90%] mx-auto"
      
    >
      <CarouselContent >
        {products.map((p) => (
          <CarouselItem key={p.id} className="md:basis-1/2 lg:basis-1/4" >
            <div className="p-1" >
               <Card key={p.id} className="border-1 rounded-md " >
          <CardBody className="overflow-visible p-0">
            <Image
              alt=''
              className="w-full object-cover h-[200px] hover:scale-90"
              radius="lg"
              shadow="sm"
              src={p.image}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between mt-1 p-2">
            <b>{p.name}</b>
            <p className="text-default-500">{p.price}</p>
            <Tooltip title="Add to cart">
            <Button variant="outlined" size="small" color="error" onClick={() => addToCart(p)}>
            <AddShoppingCartIcon/>
            </Button>
            </Tooltip>
            
          </CardFooter>
        </Card>
            </div>
          </CarouselItem>
          
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
