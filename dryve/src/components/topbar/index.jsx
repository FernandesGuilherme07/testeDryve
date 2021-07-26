import { AreaNavBar, ComplementLogo } from "./topbar.styled";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';

export default function Topbar () {

    return (
        <AreaNavBar>
            
                <div>
                    <img src="https://cdn.zeplin.io/5eb555ea0d380c76956c6e2e/assets/27C77909-76A4-4A04-B438-096DE2A97EA4.svg" alt="logo" />
                    <ComplementLogo>BACKOFFICIE</ComplementLogo>
                </div>
                <div>
                  <div>
                   <a href="#"><SearchIcon/></a> 
                  </div>
                  <div>
                   <a href="#"><NotificationsNoneIcon /></a> 
                  </div>
                  <div>
                   <a href="#"><PowerSettingsNewOutlinedIcon/></a> 
                  </div>
                </div>
        
        </AreaNavBar>

    )
}