import { TreePalm } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cartagena() {
  return (
    <>
      <div className="grid grid-rows-3 h-screen">
        <div className="h-full flex flex-col justify-center gap-y-4">
          <div className="w-full flex justify-center gap-x-2">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
              Cartagena
            </h1>
            <TreePalm size={30} color="#df8e1d" className="my-auto" />
          </div>
          <h2 className="scroll-m-20 pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">
            Población: 0.9 millones de cartageneros
          </h2>
          <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
            Cartagena, Colombia, es una ciudad costera famosa por su Ciudad Amurallada, arquitectura colonial y vibrante cultura caribeña. Combina playas, historia y vida nocturna, lo que la convierte en uno de los destinos turísticos más importantes del país.
          </p>
          <Button className="w-50 mx-auto" asChild>
            <Link href="/proyecto/ciudades">Ir a ciudades</Link>
          </Button>
        </div>
        <div className="h-full flex justify-evenly row-span-2 py-40
        bg-[url(https://lp-cms-production.imgix.net/features/2013/01/Cartagena_Colombia_cs-b9a2c77a9fe3.jpg)]
        bg-cover bg-no-repeat bg-center">
          <Card className="w-lg opacity-85">
            <CardHeader>
              <CardTitle className="text-center font-semibold">Centro historico de Cartagena</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
                El Centro Histórico, conocido como la Ciudad Amurallada, es Patrimonio de la Humanidad por la UNESCO. Aquí pueden pasear por calles empedradas, admirar la arquitectura colonial, visitar iglesias centenarias como la Catedral de Santa Catalina de Alejandría, y disfrutar de la vibrante vida nocturna en plazas como Santo Domingo y San Pedro Claver.
              </p>
            </CardContent>
          </Card>
          <Card className="w-lg opacity-85">
            <CardHeader>
              <CardTitle className="text-center font-semibold">Castillo San Felipe de Barajas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
                Esta impresionante fortaleza es uno de los símbolos de Cartagena. Construida en el siglo XVII, ofrece una vista panorámica de la ciudad y el mar Caribe. Es un lugar ideal para aprender sobre la historia militar de la región y explorar sus túneles subterráneos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
