import StudentCard from "@/components/StudentCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col justify-center bg-muted">
        <div className="w-full flex gap-x-10 justify-center my-auto">
          <StudentCard
            name="Juan Sebastian Pabuena Gomez"
            program="Programación de Software"
            description="Hola mi nombre es sebastian y me gusta la programación"
          >
            <Avatar className="h-50 w-50 mx-auto my-auto">
              <AvatarImage
                className="rounded-full"
                src="/sebas.jpeg"
                alt="Foto de Sebastian"
              />
              <AvatarFallback>Sebastian</AvatarFallback>
            </Avatar>
          </StudentCard>
        </div>
      </main>
    </>
  );
}
