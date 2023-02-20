import React, { FC } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  children?: React.ReactNode;
  variant: CardVariant;
  onClick: (num: number) => void;
}

export const Card: FC<CardProps> = ({
  width,
  height,
  children,
  variant,
}: CardProps) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "indigo",
        border: variant === CardVariant.outlined ? "4px solid red" : "none",
      }}
    >
      {children}
    </div>
  );
};
