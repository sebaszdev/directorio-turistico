import ImageWrapper from "@/components/ImageWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export type Boton = {
  texto: string;
  link: string;
};

interface Props {
  nombre: string;
  imgUrl: string;
  boton: Boton;
}

/**
 * Tarjeta para mostrar el nombre, una imagen representativa y un enlace a su pagina de cada ciudad
 */
export default function CityCard({ nombre, imgUrl, boton }: Props) {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">
          {nombre}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ImageWrapper src={imgUrl} alt={`Imagen de ${nombre}`} />
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={boton.link}>{boton.texto}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
