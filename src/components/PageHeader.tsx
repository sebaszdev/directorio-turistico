import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  botones: {texto: string, link: string}[];
};

/**
 * Header que contiene un nav para navegar
 */
export default function PageHeader({ className, botones }: Props) {
  return (
    <header className={cn("flex justify-center py-3", className)}>
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap">
          {botones.map((boton, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild className="rounded-xl">
                <Link href={boton.link} className="hover:underline">{boton.texto}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
