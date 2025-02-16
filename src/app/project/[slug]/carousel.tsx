import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
export function CarouselDemo({ images }: { images: string[] }) {
  return (
    <Carousel className="w-[75%] sm:w-full sm:max-w-3xl rounded">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-full"> {/* Garante que cada item ocupe toda a largura */}
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-[16/9] items-center justify-center p-6">
                  <Image src={image} alt={`Imagem ${index + 1}`} fill className="object-cover rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
