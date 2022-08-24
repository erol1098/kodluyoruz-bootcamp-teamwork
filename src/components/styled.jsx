import styled from "styled-components";

export const StyledContainer = styled.main`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
`;

export const StyledCardContainer = styled.ul`
  /* ... */
  width: 83rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const StyledCard = styled.li`
  width: 20rem;
  height: 25rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  & > .img-wrapper {
    width: 13rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > h4 {
    height: 5rem;
    text-align: center;
    word-wrap: wrap;
    word-break: break-word;
    overflow: auto;
  }

  & > p {
    height: 2rem;
    font-weight: bold;
  }

  & > .btn-wrapper {
    height: 2rem;

    display: flex;
    gap: 1rem;
  }
`;
