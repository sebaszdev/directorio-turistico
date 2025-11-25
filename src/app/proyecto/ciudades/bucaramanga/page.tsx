import { Sun } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Bucaramanga() {
  return (
    <>
      <div className="grid grid-cols-3 h-screen">
        <div className="w-full h-full flex flex-col col-span-2 gap-y-4 pt-10
        bg-[url(https://cdn.thecrazytourist.com/wp-content/uploads/2018/08/ccimage-shutterstock_1021129432.jpg)]
        bg-cover bg-no-repeat bg-center">
          <div className="w-full flex justify-center gap-x-2">
            <h1 className="scroll-m-20 text-center text-background text-4xl font-extrabold tracking-tight text-balance">
              Bucaramanga
            </h1>
            <Sun color="#fe640b" size={30} className="my-auto"/>
          </div>
          <h2 className="scroll-m-20 text-center text-background border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Población: 0.6 millones de bumangueses
          </h2>
          <p className="leading-7 text-center text-background [&:not(:first-child)]:mt-6">
            Bucaramanga, conocida como “La Ciudad Bonita”, es la capital del departamento de Santander en Colombia. Se destaca por su clima agradable, su ambiente tranquilo y su abundante oferta de parques y zonas verdes. Es un centro regional de comercio, educación y servicios, con una creciente vida cultural y gastronómica. Su cercanía al Cañón del Chicamocha la convierte también en un destino para actividades de aventura y ecoturismo.
          </p>
        </div>
        <div className="flex flex-col flex-wrap content-center h-full pt-10">
          <h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Atracciones en Bucaramanga
          </h2>
          <Carousel className="w-full max-w-md mt-40">
            <CarouselContent>
              <CarouselItem>
            <Card className="w-md opacity-85">
            <CardHeader>
              <CardTitle className="text-center font-semibold">Castillo San Felipe de Barajas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
                Esta impresionante fortaleza es uno de los símbolos de Cartagena. Construida en el siglo XVII, ofrece una vista panorámica de la ciudad y el mar Caribe. Es un lugar ideal para aprender sobre la historia militar de la región y explorar sus túneles subterráneos.
              </p>
            </CardContent>
          </Card>
          </CarouselItem>
          <CarouselItem>
           <Card className="w-md opacity-85">
            <CardHeader>
              <CardTitle className="text-center font-semibold">Castillo San Felipe de Barajas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
                Esta impresionante fortaleza es uno de los símbolos de Cartagena. Construida en el siglo XVII, ofrece una vista panorámica de la ciudad y el mar Caribe. Es un lugar ideal para aprender sobre la historia militar de la región y explorar sus túneles subterráneos.
              </p>
            </CardContent>
          </Card>
          </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          </Carousel>
          <Button className="mt-20" asChild>
            <Link href="/proyecto/ciudades">Ir a ciudades</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
