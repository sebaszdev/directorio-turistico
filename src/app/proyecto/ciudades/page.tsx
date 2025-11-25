import CityCard from "@/components/CityCard";
import GridContainer from "@/components/GridContainer";
import type { Boton } from "@/components/CityCard";
import PageHeader from "@/components/PageHeader";

export default function Ciudades() {
  const ciudades: {
    nombre: string;
    imgUrl: string;
    boton: Boton;
  }[] = [
    {
      nombre: "Medellin",
      imgUrl: "/medellin.jpeg",
      boton: {
        texto: "Ver Medellin",
        link: "/proyecto/ciudades/medellin",
      },
    },
    {
      nombre: "Bogotá",
      imgUrl: "/bogota.jpeg",
      boton: {
        texto: "Ver Bogotá",
        link: "/proyecto/ciudades/bogota",
      },
    },
    {
      nombre: "Cali",
      imgUrl: "/cali.jpeg",
      boton: {
        texto: "Ver Cali",
        link: "/proyecto/ciudades/cali",
      },
    },
    {
      nombre: "Cartagena",
      imgUrl: "/cartagena.jpeg",
      boton: {
        texto: "Ver Cartagena",
        link: "/proyecto/ciudades/cartagena",
      },
    },
    {
      nombre: "Bucaramanga",
      imgUrl: "/bucaramanga.jpeg",
      boton: {
        texto: "Ver Bucaramanga",
        link: "/proyecto/ciudades/bucaramanga",
      },
    },
    {
      nombre: "Pereira",
      imgUrl: "/pereira.jpeg",
      boton: {
        texto: "Ver Pereira",
        link: "/proyecto/ciudades/pereira",
      },
    },
  ];

  const botones = [
    {
      texto: "Proyecto",
      link: "/proyecto",
    },
    {
      texto: "Contacto",
      link: "/proyecto/contacto",
    },
  ];

  return (
    <>
      <PageHeader className="bg-muted" botones={botones} />
      <main className="flex-1 flex flex-col justify-center bg-muted">
        <GridContainer>
          {ciudades.map((ciudad, index) => (
            <CityCard
              key={index}
              nombre={ciudad.nombre}
              imgUrl={ciudad.imgUrl}
              boton={ciudad.boton}
            />
          ))}
        </GridContainer>
      </main>
    </>
  );
}
