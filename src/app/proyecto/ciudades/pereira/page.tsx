import { Button } from "@/components/ui/button";
import { Wine } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Pereira() {
  return (
    <>
      <div className="w-full h-screen pt-8 bg-muted">
        <div className="w-full flex justify-center gap-x-2 mb-4">
          <h1 className="scroll-m-20 text-center text-card-foreground text-4xl font-extrabold tracking-tight text-balance">
            Pereira
          </h1>
          <Wine color="#209fb5" size={30} className="my-auto"/>
        </div>
        <div className="w-200 h-100 rounded-2xl mx-auto
        bg-[url(https://www.triviantes.com/wp-content/uploads/2023/01/turismo-en-pereira-1.jpg)]
        bg-cover bg-no-repeat" />
        <div className="grid grid-cols-3 py-10 h-120">
          <div className="w-full flex flex-col justify-center">
            <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">
              Pereira
            </h2>
            <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
              Pereira, capital del Risaralda, es una ciudad dinámica en el corazón del Eje Cafetero colombiano. Combina una vibrante vida urbana con paisajes montañosos, cafetales y aguas termales. Su clima cálido, su gente amable y su creciente oferta cultural y gastronómica la convierten en un destino atractivo. Además, es un punto estratégico para explorar la región cafetera declarada Patrimonio de la Humanidad.
            </p>
            <Button asChild className="w-50 mx-auto mt-10">
              <Link href="/proyecto/ciudades">Ir a ciudades</Link>
            </Button>
          </div>
          <div className="w-full flex flex-wrap justify-evenly content-center col-span-2">
            <Card className="max-w-lg">
            <CardHeader>
              <CardTitle className="text-center font-semibold text-xl">Parque del cafe</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                ¿Un parque de atracciones dedicado al café? Sí, ubicado no muy lejos de la ciudad de Quindío, encontrará todo un parque temático con paseos, montañas rusas, espectáculos, juegos y atracciones acuáticas basadas en una de las cosechas más grandes del país.              </p>
            </CardContent>
          </Card>
          <Card className="max-w-xl">
            <CardHeader>
              <CardTitle className="text-center font-semibold text-xl">Plaza Bolívar y la Catedral La Señora de Nuestra Pobreza</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Otra plaza latinoamericana dedicada a "El Libertador", esta Plaza Bolívar es un lugar donde la gente se reúne para socializar, jugar ajedrez, lustrarse los zapatos y comer algo de los vendedores ambulantes.
              </p>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </>
  );
}
