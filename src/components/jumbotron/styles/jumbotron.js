import styled from 'styled-components/macro';

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    color: white;
    overflow: hidden;
    padding: 50px 5%;
`

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ direction }) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
`;

export const Container = styled.div``;

export const Pane = styled.div`
    width: 50%;

    @media(max-width: 1000px) {
      flex-direction: column;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media(max-width: 600) {
      font-size: 35px;
    }
`;
export const Subtitle = styled.h2``;
export const Image = styled.img`
    max-width: 100%;
    height: 100%;
`;

