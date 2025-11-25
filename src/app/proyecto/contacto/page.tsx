import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleUserRound } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function Contacto() {
  const botones = [
    {
      texto: "Proyecto",
      link: "/proyecto",
    },
    {
      texto: "Ciudades",
      link: "/proyecto/ciudades",
    },
  ];

  return (
    <>
      <PageHeader botones={botones} />
      <main className="flex-1 flex flex-col flex-wrap content-center pt-15 gap-y-25">
        <div className="flex w-full justify-center gap-x-2">
          <SectionTitle>Contacto</SectionTitle>
          <CircleUserRound size={30} className="my-auto" />
        </div>
        <Card className="flex gap-y-15 w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center font-semibold text-lg">
              Contactanos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" type="nombre" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="correo">Correo electrónico</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="usuario@example.com"
                    required
                  />
                </div>
                <Textarea placeholder="¿Tienes algo por decirnos?" required />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
