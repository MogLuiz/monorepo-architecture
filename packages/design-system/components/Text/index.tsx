import React from "react";

import { THtmlTags } from "./types";

import * as S from "./styles";

type TTextComponentProps = {
  tag: THtmlTags;
  children: React.ReactNode;
};

export const TextComponent = ({ tag, children, ...rest }: TTextComponentProps) => (
  <S.Text as={tag} {...rest}>
    {children}
  </S.Text>
);
