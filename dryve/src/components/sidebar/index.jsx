import { AreaSideBar } from "./sidebar.styled";

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ChangeHistoryOutlinedIcon from '@material-ui/icons/ChangeHistoryOutlined';


export default function SideBar () {

  const name = 'Guilherme Fernandes';

  return (
    <AreaSideBar>
   
          <ul>
            <li>
              <div>
                <img src="https://avatars.githubusercontent.com/u/72757771?s=400&u=1b9a884a1ced8d126683c8f4b22dd0b78945bf7c&v=4" alt="avatar" />
                <span>
                  {name}
                  </span> 
              </div>
            </li>
            <li> <HomeIcon/> <span>home</span> </li>
            <li> <PersonIcon/> <span>clients</span> </li>
            <li> <LocalTaxiIcon/> <span>Veículos</span></li>
            <li> <ChangeHistoryOutlinedIcon/> <span>triangulacao</span></li>
            <li>...</li>

          </ul>

    </AreaSideBar>
  )
}