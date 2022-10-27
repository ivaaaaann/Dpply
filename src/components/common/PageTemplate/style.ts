import styled, { css } from "styled-components";

export const PageTemplateContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
`;

export const PageTemplateWrap = styled.div<{ isNoneNavView: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: transparent;

  ${({ isNoneNavView }) =>
    isNoneNavView
      ? css`
          height: 100%;
        `
      : css`
          height: calc(100% - 85px);
        `}
`;
