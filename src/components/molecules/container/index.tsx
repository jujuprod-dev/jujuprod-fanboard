import * as React from "react";
import type { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  ...props
}: ContainerProps) => {
  return (
    <main
      className="p-6 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-14"
      {...props}
    >
      {children}
    </main>
  );
};
