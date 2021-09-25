import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 7px;
  img {
    transition: transform 0.2s;
    filter: drop-shadow(
      1px 2px 3px ${(props) => props.theme.lighterWhiteTransparent}
    );
    width: 6vw;
    height: 60px;
    &:hover {
      -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 300px) and (max-width: 767px) {
    display: none;
  }
`;
