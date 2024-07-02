import LogoComp from "./LogoComp"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import '../../reusable/props.css'
const HeaderComp = () => {
  return (
    <div className="header fixed flex aic">
     <LogoComp/>
     <div className="location rel flex aic">
          <SearchIcon className="ico" />
        <input className="label s15 font" placeholder="your location" value="pakistan"/>
        <KeyboardArrowDownIcon className="arro"/>
     </div>
     <div className="search flex aic">
      <input type="text" placeholder="find your product..." className="query s15 font"/>
      <SearchIcon className="go"/>
     </div>
     <div className="action flex aic">
      <Link className="fontb s15">Sign In</Link>
      <button className="sell">
        <AddIcon/>
        <h2 className="s15 font">Sell</h2>
      </button>
     </div>
    </div>
  )
}

export default HeaderComp
