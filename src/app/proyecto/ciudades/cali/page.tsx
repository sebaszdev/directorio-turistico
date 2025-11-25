import { Drum, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export default function Cali() {
  return (
    <>
      <div className="w-full flex flex-col pt-10 gap-y-2 h-100
      bg-[url(https://i.redd.it/o2v8ga5q6qo21.jpg)]
      bg-cover bg-no-repeat bg-center"
      >
        <div className="w-full flex justify-center gap-x-2">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Cali
          </h1>
          <Drum size={30} color="#40a02b" className="my-auto" />
        </div>
        <h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Población: 2.2 millones de caleños
        </h2>
      </div>
      <p className="leading-7 text-center [&:not(:first-child)]:mt-6">
        Cali, conocida como la “Sucursal del Cielo”, es una ciudad vibrante del suroccidente de Colombia famosa por su alegría, su clima cálido y su tradición salsera. Rodeada de montañas y atravesada por el río Cali, combina modernidad con riqueza cultural. Es un importante centro económico, deportivo y artístico del país.
      </p>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl text-center mt-10 font-semibold tracking-tight first:mt-0">
        Atracciones en Cali
      </h2>
      <div className="w-full flex flex-wrap content-center justify-evenly mt-10">
        <div className="flex gap-x-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button>Museo de la tertulia</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                El Museo de Arte Moderno La Tertulia es una joya cultural en Cali Colombia. Este lugar es reconocido tanto a nivel nacional como internacional por su valiosa colección de arte moderno y contemporáneo, y es un lugar imperdible para los amantes del arte y los visitantes curiosos.
              </p>
            </PopoverContent>
          </Popover>
          <MousePointerClick size={30} className="my-auto" />
        </div>
        <Button asChild>
          <Link href="/proyecto/ciudades">Ir a ciudades</Link>
        </Button>
        <div className="flex gap-x-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button>Cerro de las tres cruces</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                El Cerro de las Tres Cruces en Cali es un santuario natural que se eleva sobre la ciudad de Cali, ofreciendo una experiencia única y mágica. Con sus tres cruces emblemáticas y vistas panorámicas impresionantes, este lugar sagrado invita a conectarse con la naturaleza y encontrar paz en lo alto.
              </p>
            </PopoverContent>
          </Popover>
          <MousePointerClick size={30} className="my-auto" />
        </div>
      </div>       
    </>
  );
}
