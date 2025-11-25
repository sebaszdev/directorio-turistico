import { Flower2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Medellin() {
  return (
    <div
      className="flex flex-col gap-4 h-screen pt-10
        bg-[url(https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/uploads/2022/07/panoramica-de-medellin-en-la-tarde.jpg)]
        bg-cover bg-no-repeat"
    >
      <div className="w-full flex justify-center gap-x-2">
        <h1 className="scroll-m-20 text-center text-card-foreground text-4xl font-extrabold tracking-tight text-balance">
          Medellin
        </h1>
        <Flower2 color="#e64553" size={30} className="my-auto" />
      </div>
      <h2 className="scroll-m-20 pb-2 text-3xl text-center text-card-foreground font-semibold tracking-tight first:mt-0">
        Poblacion: 2.6 millones de paisas
      </h2>
      <div className="w-200 mx-auto">
        <p className="leading-7 text-center text-card-foreground not(:first-child)]:mt-10">
          Medellín, conocida como la “Ciudad de la Eterna Primavera”, se destaca
          por su clima agradable y su espíritu innovador. Rodeada de montañas,
          combina modernidad con tradición paisa. Es un centro cultural y
          tecnológico en constante transformación.
        </p>
      </div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl text-center my-10 font-semibold tracking-tight first:mt-0">
        Atracciones turisticas en medellin
      </h2>
      <div className="w-full flex justify-around">
        <Card className="max-w-xl opacity-85">
          <CardHeader>
            <CardTitle className="text-center font-semibold text-xl">
              Comuna 13
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              La Comuna 13, un barrio de pasado trágico y violento donde
              murieron cientos de personas por la acción de las guerrillas, los
              grupos paramilitares, la guerra sucia del gobierno y las bandas de
              narcotráfico como el Cartel de Medellín de Pablo Escobar, ha
              sabido superar todas estas adversidades gracias al trabajo de su
              gente y transformarlo en el lugar más imprescindible que visitar
              en Medellín.
            </p>
          </CardContent>
        </Card>
        <Card className="max-w-xl opacity-85">
          <CardHeader>
            <CardTitle className="text-center font-semibold text-xl">
              Museo de Antioquia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              El Museo de Antioquia, ubicada en uno de los laterales de la Plaza
              de Botero, es el más importante que visitar en Medellín. En este
              museo situado en el antiguo Palacio Municipal de estilo art decó y
              con dos patios interiores, se exhiben más de 100 obras (la gran
              mayoría pinturas) de Fernando Botero en la tercera planta además
              de algunas de varios artistas internacionales.
            </p>
          </CardContent>
        </Card>
      </div>
      <Button className="w-50 mx-auto mt-60" asChild>
        <Link href="/proyecto/ciudades">Ir a ciudades</Link>
      </Button>
    </div>
  );
}
