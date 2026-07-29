'use client';

import React from 'react';
import { ImgProps } from './Img.types';
import styled, { css } from 'styled-components';

const StyledImg = styled.img<ImgProps>`
  display: flex;
  justify-self: ${({ justify_content }) => justify_content ?? 'flex-start'};

  padding: 0;
  font-size: 1rem;
  border: solid;
  border-radius: 4px;
  color: black;
  width: 400px;
  border-color: ${({ border_colour }) => border_colour ?? '#e6e3e3'};
  ${(props) =>
    !props.state &&
    css`
      display: flex;
      justify-self: flex-start;

      padding: 0;
      color: white;
      cursor: not-allowed;
      width: 400px;
      background-color: #e4e4e4d3;
      opacity: 50%;
      border-color: #e4e4e4;
    `}
`;

export default function Img({ alt, border_colour, state, src, justify_content }: ImgProps) {
  console.log('Rendering Img component');
  return (
    <StyledImg
      state={state}
      border_colour={border_colour}
      justify_content={justify_content}
      alt={alt}
      src={src}
      data-testid="img"
    ></StyledImg>
  );
}
