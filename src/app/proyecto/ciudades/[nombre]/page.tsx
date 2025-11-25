"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Nombre() {
  const params = useParams();
  const nombreCiudad = params?.nombre as string;

  return (
    <>
      <main className="flex-1 flex flex-col flex-wrap content-center justify-center gap-y-10">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          {nombreCiudad}
        </h1>
        <Card className="w-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center">Página dinamica</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Esta página recibe un parametro en la ruta /proyecto/ciudades/[nombre] y lo muestra en el texto de arriba.
              Parametro recibido: <strong>{nombreCiudad}</strong>
            </p>
          </CardContent>
        </Card>
        <Button asChild className="w-50 mx-auto">
          <Link href="/proyecto/ciudades">Ir a ciudades</Link>
        </Button>
      </main>
    </>
  );
}
