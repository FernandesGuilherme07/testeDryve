import styled from "styled-components";

export const AreaSideBar = styled.div` 
  flex: 1;
  display: flex;
  flex-direction: collumn;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  border-right: 1px solid #E0E0E0;
  

      ul {
        margin: 10px;
        align-itens: center;


        li{
          
          display: flex;
          align-itens: center baseline;
          color: #555;
          list-style: none;
          padding: 8px;
          cursor: pointer;

          span {
            margin: 5px;
          }

          div {
            display: flex;
            align-itens: center; 
            margin-top: 25px; 
          
            img{
                            
              margin-left: 20px;
              margin-bottom: 38px;
              width: 50px;
              height:50px;
              border-radius: 60px;
              border: 2px solid #1d74fc;

              }

              span {
              margin-left: 7px;
              margin-top: 17px;
              font-size: 0.8rem;

              @media

              }

          }

          
        }

        li:hover {
          color: #1d74fc;
        }
      }
    
  

`;