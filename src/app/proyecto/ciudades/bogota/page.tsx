import { Button } from "@/components/ui/button";
import { Snowflake, MoveRight } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BogotaPage() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-screen bg-muted">
        <div className="flex flex-col justify-evenly p-2">
          <div className="w-full flex justify-center gap-x-2">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
              Bogotá
            </h1>
            <Snowflake color="#1e66f5" size={30} className="my-auto"/>
          </div>
          <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">
            Poblacion: 7.9 millones de rolos
          </h2>
          <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
            Bogotá, capital de Colombia, es una ciudad vibrante ubicada en la cordillera de los Andes. Combina historia colonial, arte urbano y una vida cultural diversa. Su clima fresco y sus amplias ciclovías la hacen única. Es un centro económico, educativo y gastronómico del país.
          </p>
        </div>
        <div className="col-span-2 w-full
        bg-[url(https://thetravelshots.com/wp-content/uploads/2021/12/Monserrat-1.jpg)]
        bg-cover bg-no-repeat bg-center" />
        <div className="flex flex-col justify-center gap-y-4">
          <div className="flex gap-x-2 justify-center">
            <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">
              Atracciones turisticas en Bogotá
            </h2>
            <MoveRight size={30} className="my-auto" />
          </div>
          <Button asChild className="w-50 mx-auto">
            <Link href="/proyecto/ciudades">Ir a ciudades</Link>
          </Button>
        </div>
        <div className="flex flex-wrap justify-evenly content-center col-span-2 full px-8">
          <Card className="grid grid-cols-2 w-xl">
            <CardHeader className="flex flex-wrap justify-center content-center">
              <CardTitle>Cerro de Monserrate</CardTitle>
            </CardHeader>
            <CardContent>
              Una de las mejores cosas que hacer en Bogotá es subir al Cerro de Monserrate para disfrutar de las mejores vistas de la ciudad.
              Este cerro situado a 3.152 metros de altura, es el más famoso de los que rodean la ciudad, y el que todavía conserva gran parte del bosque andino.
            </CardContent>
          </Card>
        <Card className="grid grid-cols-2 w-xl">
            <CardHeader className="flex flex-wrap justify-center content-center">
              <CardTitle>Plaza de Bolívar</CardTitle>
            </CardHeader>
            <CardContent>
              La enorme Plaza de Bolívar, situada en el corazón de casco antiguo, es la más importante que ver en Bogotá.
              Esta plaza, punto de encuentro entre turistas y locales, concentra alguno de los edificios más importantes de la ciudad como la Catedral Primada, el Palacio de Justicia, el Capitolio Nacional y el Palacio Liévano, sede del ayuntamiento.
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
