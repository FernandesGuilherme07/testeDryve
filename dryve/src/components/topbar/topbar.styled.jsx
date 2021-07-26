import Styled from 'styled-components'

export const AreaNavBar = Styled.div`


    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    align-itens: center;
    justify-content: space-between;
    padding: 20px 20px 20px 300px;
    border-bottom: 1px solid #E0E0E0;
    position: sticky;
    top: 0;
    z-index: 0;

    div {
      display: flex;
      align-itens: center;

      div{
        margin-left: 10px;
      }
    }
   
`;

export const ComplementLogo = Styled.span`
color: #b9bec7;
font-size: 0.62rem;
position: relative;
bottom: -15px


`;



 