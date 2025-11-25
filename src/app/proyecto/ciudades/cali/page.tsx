import { Drum } from "lucide-react";

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
          <Drum size={30} className="my-auto" />
        </div>
        <h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Población: 2.2 millones de caleños
        </h2>
      </div>
    </>
  );
}
