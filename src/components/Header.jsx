import React from "react"
import { MdClose } from "react-icons/md"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import { styled, alpha } from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import LogoPag from "../assets/logo2.png"
import useDataMovies from "../customHooks/useDataMovies"

const drawerWidth = 240

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
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

export default function Header({ setSearch }) {
  const navigate = useNavigate()

  const { setCurrentPage } = useDataMovies();

  function handleChangeInput(e) {
    setCurrentPage(1)
    setSearch(e.target.value)
    navigate("/")
  }

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="flex">
        <MdClose size={40} style={{ color: "white", padding: "8px" }} />
        <Link to="/">
          <Box className="flex ml-[10px] h-[60px] w-[60px] min-[900px]:block min-[900px]:w-[90px] min-[900px]:h-[70px] min-[900px]:px-2.5">
            <img src={LogoPag} alt="Logo Cinema" />
          </Box>
        </Link>
      </div>
      <Divider />
      <List>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "start", marginLeft: "25px" }}>
              <AiFillHome />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/latest-releases">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "start", marginLeft: "25px" }}>
              <ListItemText primary="Latest releases" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/popular">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "start", marginLeft: "25px" }}>
              <ListItemText primary="Popular" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", position: "absolute", zIndex: "2" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ padding: "10px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Box className="hidden h-[60px] w-[60px] min-[600px]:block min-[600px]:w-[90px] min-[600px]:h-[70px] min-[600px]:px-2.5 ">
              <img src={LogoPag} alt="Logo Cinema" />
              <h1 className="hidden">Peliculas App</h1>
            </Box>
          </Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink exact={true.toString()} to="/" activeclassname="active">
              <Button sx={{ color: "#fff" }}>
                <AiFillHome size={20} />
              </Button>
            </NavLink>
            <NavLink to="/latest-releases" activeclassname="active">
              <Button sx={{ color: "#fff" }}>Latest releases</Button>
            </NavLink>
            <NavLink to="/popular" activeclassname="active">
              <Button sx={{ color: "#fff" }}>Popular</Button>
            </NavLink>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={handleChangeInput}
              id="inputSearch"
              placeholder="Search.."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
