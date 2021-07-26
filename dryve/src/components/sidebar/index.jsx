import { AreaSideBar } from "./sidebar.styled";

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ChangeHistoryOutlinedIcon from '@material-ui/icons/ChangeHistoryOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';

export default function SideBar () {

  return (
    <AreaSideBar>
   
          <ul>
            <li>
              <div>
                <img src="https://avatars.githubusercontent.com/u/72757771?s=400&u=1b9a884a1ced8d126683c8f4b22dd0b78945bf7c&v=4" alt="avatar" />
                <span>
                  Guilherme Fernandes <br/> 
                 <PowerSettingsNewOutlinedIcon/>SAIR 
                  </span> 
              </div>
            </li>
            <li> <HomeIcon/> home</li>
            <li> <PersonIcon/> clients</li>
            <li> <LocalTaxiIcon/> cars</li>
            <li> <ChangeHistoryOutlinedIcon/> triangulacao</li>
            <li>...</li>

          </ul>

    </AreaSideBar>
  )
}