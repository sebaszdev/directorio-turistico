import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageWrapperProps {
  src: string;
  alt?: string;
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  className?: string;
}

/**
 * Componente que acoge una imagen y la muestra en un tamaño adecuado y responsive
 */
export default function ImageWrapper({
  src,
  alt = "",
  className,
}: ImageWrapperProps) {
  return (
    <AspectRatio ratio={16 / 9} className={className}>
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover"
        />
      </div>
    </AspectRatio>
  );
}

