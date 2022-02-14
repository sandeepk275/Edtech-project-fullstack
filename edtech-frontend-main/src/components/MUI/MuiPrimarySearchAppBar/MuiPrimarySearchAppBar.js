import React, { useState, Fragment } from "react";

// imports for 3rd party libraries
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

// imports for routes
import { routeConstants } from "../../../routes";

// imports from Material UI library
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// imports for custom hooks
import { useAuth } from "../../../contexts/auth";

// imports for styles
import { useStyles } from "./styles";

const MuiPrimarySearchAppBar = ({
  isLogoClickable,
  isSearchVisible,
  isCategoriesVisible,
  isProfileVisible,
  handleTitleSearch,
  handleCategorySearch,
  categoryList,
}) => {
  const classes = useStyles();
  const { isLoggedIn, logout } = useAuth();
  const history = useHistory();

  const [categoriesAnchorEl, setCategoriesAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [profileMobileAnchorEl, setProfileForMobileAnchorEl] = useState(null);

  const [searchInputText, setSearchInputText] = useState("");

  const isCategoriesMenuOpen = Boolean(categoriesAnchorEl);
  const isProfileMenuOpen = Boolean(profileAnchorEl);
  const isProfileMobileMenuOpen = Boolean(profileMobileAnchorEl);

  // setting defaults if the props are not received
  isLogoClickable = isLogoClickable || false;
  isSearchVisible = isSearchVisible || false;
  isCategoriesVisible = isCategoriesVisible || false;
  isProfileVisible = isProfileVisible || false;

  const handleCategoriesMenuOpen = (event) => {
    setCategoriesAnchorEl(event.currentTarget);
  };

  const handleCategoriesMenuClose = () => {
    setCategoriesAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleProfileMobileMenuOpen = (event) => {
    setProfileForMobileAnchorEl(event.currentTarget);
  };

  const handleProfileMobileMenuClose = () => {
    setProfileForMobileAnchorEl(null);
  };

  const handleSearchInputChange = (event) => {
    setSearchInputText(event.target.value);
  };

  const handleSearchSubmitClick = () => {
    handleTitleSearch(searchInputText);
  };

  const handleCategoryClick = (category) => {
    /* TODO: API pending; replace innerText with data fetched from server */
    handleCategorySearch(category);
    handleCategoriesMenuClose();
  };

  const redirectToLoginPage = () => {
    history.push(routeConstants.ROUTE_URL.ONBOARD);
  };

  // visible as categories menu
  const categoriesMenuId = "categories-menu";
  const renderCategoriesMenu = (
    <Menu
      anchorEl={categoriesAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={categoriesMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isCategoriesMenuOpen}
      onClose={handleCategoriesMenuClose}
      className={classes.root}
    >
      {/* TODO: API pending; fetch categories data from server */}
      {categoryList && categoryList.map((category, key) => 
         <MenuItem key={key} onClick={() => handleCategoryClick(category)} className={classes.menuItem}>
         {category}
       </MenuItem>
        )}
      {/* <MenuItem onClick={handleCategoryClick} className={classes.menuItem}>
        Frontend Development
      </MenuItem>
      <MenuItem onClick={handleCategoryClick} className={classes.menuItem}>
        Backend Development
      </MenuItem>
      <MenuItem onClick={handleCategoryClick} className={classes.menuItem}>
        DevOps
      </MenuItem> */}
    </Menu>
  );

  // visible as profile menu on large screen sizes (desktop)
  const profileMenuId = "profile-menu";
  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={profileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
      className={classes.root}
    >
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );

  // visible as more icon's menu on small screen sizes (mobile)
  const profileMobileMenuId = "profile-menu-mobile";
  const renderProfileMobileMenu = (
    <Menu
      anchorEl={profileMobileAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={profileMobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isProfileMobileMenuOpen}
      onClose={handleProfileMobileMenuClose}
      className={classes.root}
    >
      <MenuItem onClick={isLoggedIn ? logout : redirectToLoginPage}>
        <IconButton
          aria-label="profile of current user"
          aria-controls={profileMenuId}
          aria-haspopup="true"
          color="inherit"
          className={classes.mobileMenuItemIcon}
        >
          <AccountCircle />
        </IconButton>
        {isLoggedIn ? <p>Logout</p> : <p>Login</p>}
      </MenuItem>
    </Menu>
  );

  const renderLogo = (
    // add cursorPointer class when the logo is clickable
    <Typography
      className={`${classes.logo} ${isLogoClickable && classes.cursorPointer}`}
      variant="inherit"
      component="h1"
    >
      upGrad
    </Typography>
  );

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/* upGrad Logo */}
          {isLogoClickable ? <Link to="/">{renderLogo}</Link> : renderLogo}

          {/* Search Bar */}
          {isSearchVisible && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchInputChange}
              />
              <IconButton
                className={`${classes.searchButton} ${classes.btn}`}
                aria-label="search course"
                aria-controls={profileMenuId}
                aria-haspopup="false"
                color="inherit"
                onClick={handleSearchSubmitClick}
              >
                <SendIcon />
              </IconButton>
            </div>
          )}

          {/* Categories */}
          {isCategoriesVisible && (
            <div
              className={classes.categories}
              onClick={handleCategoriesMenuOpen}
            >
              <IconButton
                className={classes.btn}
                aria-label="course categories"
                aria-controls={profileMenuId}
                aria-haspopup="true"
                color="inherit"
              >
                <AppsOutlinedIcon />
              </IconButton>
              <Typography variant="inherit" className={classes.categoriesLabel}>
                Categories
              </Typography>
            </div>
          )}

          {isCategoriesVisible && renderCategoriesMenu}

          {/* Profile Menu - large screens (desktop) */}
          {isProfileVisible && (
            <Fragment>
              <div className={classes.sectionDesktop}>
                {isLoggedIn ? (
                  <IconButton
                    edge="end"
                    aria-label="profile of current user"
                    aria-controls={profileMenuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                ) : (
                  <Button variant="contained" onClick={redirectToLoginPage}>
                    Login
                  </Button>
                )}
              </div>

              {/* More Button - small screens (mobile) */}
              <div className={classes.sectionMobile}>
                <IconButton
                  className={classes.btn}
                  aria-label="show more"
                  aria-controls={profileMobileMenuId}
                  aria-haspopup="true"
                  onClick={handleProfileMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
      {isProfileVisible && renderProfileMobileMenu}
      {isProfileVisible && renderProfileMenu}
    </Fragment>
  );
};

MuiPrimarySearchAppBar.propTypes = {
  isLogoClickable: PropTypes.bool,
  isSearchVisible: PropTypes.bool,
  isCategoriesVisible: PropTypes.bool,
  isProfileVisible: PropTypes.bool,
  handleTitleSearch: PropTypes.func,
  handleCategorySearch: PropTypes.func,
};

export default MuiPrimarySearchAppBar;
