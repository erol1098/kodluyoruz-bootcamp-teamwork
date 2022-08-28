import styled from 'styled-components';

export const StyledContainer = styled.main`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff);
`;

export const StyledHeader = styled.header`
  padding: 1rem;
  background: ${(props) => props.backColor};
  color: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;

export const StyledCardContainer = styled.ul`
  /* ... */
  width: 83rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  & > .loading {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
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
  background: linear-gradient(to bottom, #ffefba, #ffffff);

  & > .img-wrapper {
    width: 13rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: white;
    & > img {
      max-height: 10rem;
    }
  }

  & > h4 {
    height: 5rem;
    text-align: center;
    word-wrap: wrap;
    word-break: break-word;
    overflow: auto;
  }

  & > p {
    font-weight: bold;
  }

  & > .btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  }
`;

export const StyledButton = styled.button`
  width: 7rem;
  padding: 0.7rem 0.3rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.color};
`;

export const StyledCartItem = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
  padding: 1rem 3rem;
  & > .btn-wrapper {
    width: 10rem;
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    & > button {
      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 0.2rem;
    }

    & > p {
      padding: 0;
    }
  }

  & > button {
    height: 2rem;
    padding: 0.2rem 1rem;
  }
`;
