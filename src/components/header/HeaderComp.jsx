import "../../reusable/props.css";
import SearchIcon from "@mui/icons-material/Search";
import LogoComp from "./LogoComp";
import InventoryIcon from "@mui/icons-material/Inventory";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const HeaderComp = () => {
  return (
    <>
      <header className="mt-2 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <LogoComp />
            <InventoryIcon className="mx-2" />
            <span className="fs-5">Rent Product</span>
          </a>
          <div className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <Fab variant="extended" size="small" color="primary">
              <AddIcon sx={{ mr: 1 }} />
              Sell
            </Fab>
            <Button variant="contained" className="mx-2">
              Login
            </Button>
          </div>
        </div>
      </header>
      <div className=" mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="col-12 py-2 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <div className="location rel flex aic">
                <SearchIcon className="ico s24" />
                <input className="label s15 font" placeholder="your location" />
                <KeyboardArrowDownIcon className="arro s24" />
              </div>
            </div>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <div className="search flex aic">
                <input
                  type="text"
                  placeholder="find your product..."
                  className="query s15 font"
                />
                <SearchIcon className="go s24" />
              </div>
            </form>
            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                style={{
                  position: "absolute",
                  inset: "0px 0px auto auto",
                  margin: "0px",
                  transform: "translate3d(0.5px, 34px, 0px)",
                }}
              >
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComp;
