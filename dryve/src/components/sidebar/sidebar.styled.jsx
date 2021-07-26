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

        align-itens: center;

        li{
          color: #555;
          align-itens: baseline;
          margin: 20px;
          list-style: none;
          padding: 10px;

          div {
            display: flex;
            align-itens: center; 
            margin-top: 25px;
                    img{
                            
                            margin-left: 20px;
                            width: 50px;
                            height:50px;
                            border-radius: 60px;
                            border: 2px solid #1d74fc;
                          }

                          span {
                            margin-left: 7px;
                            margin-top: 10px;
                            font-size: 0.8rem;

                            PowerSettingsNewOutlinedIcon {
                              font-size: 0.8rem;
                            }
                            
                          }

                }

          
        }
      }
    
  

`;