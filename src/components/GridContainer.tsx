interface Props {
  children: React.ReactNode;
};

/**
 * Contenedor que organiza los elementos en un grid
 */
export default function GridContainer({ children }: Props) {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-y-6">
      {children}
    </div>
  );
}
