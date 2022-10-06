import React from "react";

import { THtmlTag } from "./types";

import * as S from "./styles";

interface TextProps {
  tag: THtmlTag;
  children: React.ReactNode;
}
export function Text({ tag, children, ...props }: TextProps) {
  return (
    <S.Text as={tag} {...props}>
      {children}
    </S.Text>
  );
}
