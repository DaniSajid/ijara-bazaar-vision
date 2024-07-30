import * as React from "react";
import "../../reusable/props.css";
import SearchIcon from "@mui/icons-material/Search";
import LogoComp from "./LogoComp";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Button, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import {  NavLink ,Link} from "react-router-dom";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Karachi,Pakistan",
  "Sindh,Pakistan",
  "Punjab,Pakistan",
  "Kpk,Pakistan",
  "Azad Kashmir,Pakistan",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const HeaderComp = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
           
            <li>
            <NavLink  to="/" className="nav-link px-2 link-dark">Home</NavLink>
           
            </li>
            <li>
            <NavLink  to="/" className="nav-link px-2 link-dark">Category</NavLink>
            </li>
            <li>
            <NavLink  to="/about" className="nav-link px-2 link-dark">About</NavLink>
            </li>
            <li>
            <NavLink  to="/contact" className="nav-link px-2 link-dark">Contact</NavLink>
            </li>
          </ul>
          <div className="col-12 col-lg-auto mb-3 mb-lg-0 " role="search">
            <Fab variant="extended" size="small" color="primary">
              <AddIcon sx={{ mr: 1 }} />
            <Link to='/account' className="text-white text-decoration-none ">Sell</Link>  
            </Fab>
            <Button variant="contained" className="mx-2">
              Login
            </Button>
          </div>
        </div>
      </header>
      <div className="  border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="col-12 py-2 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-chip-label">
                    Your Location
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Your Location"
                      />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  className="border border-black"
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
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
                  <Link className="dropdown-item" to="/accountSetting">
                   Account Settings
                  </Link>
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
