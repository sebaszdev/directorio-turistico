import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

/**
 * Header que contiene un nav para navegar
 */
export default function PageHeader() {
  return (
    <header className="flex justify-center py-3 bg-muted">
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/proyecto/ciudades" className="hover:underline">Ciudades</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          <NavigationMenuItem />
          <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/proyecto/contacto" className="hover:underline">Contacto</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          <NavigationMenuItem />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
