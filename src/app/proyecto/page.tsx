import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Proyecto() {
  const botones = [
    {
      texto: "Ciudades",
      link: "/proyecto/ciudades",
    },
    {
      texto: "Contacto",
      link: "/proyecto/contacto",
    },
  ];

  return (
    <>
      <PageHeader botones={botones} />
      <main className="flex flex-1 flex-col justify-center">
        <Card className="flex max-w-2xl mx-auto bg-popover/80">
          <CardHeader>
            <CardTitle>
              <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Directorio turistico interactivo
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 text-justify [&:not(:first-child)]:mt-6">
              Directorio Turístico Interactivo es una aplicación web
              desarrollada con Next.js y TailwindCSS que presenta información de
              varias ciudades colombianas mediante rutas estáticas y dinámicas.
              Incluye componentes personalizados, páginas temáticas por ciudad,
              un listado visual de destinos y un formulario de contacto
              construido con shadcn/ui. El proyecto demuestra organización
              modular, diseño adaptable y uso de buenas prácticas en React.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-x-4 mt-40">
            <Button className="rounded-xl">
              <Link href="/proyecto/ciudades">Ciudades</Link>
            </Button>
            <Button variant="outline" className="rounded-xl">
              <Link href="/proyecto/contacto">Contacto</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
