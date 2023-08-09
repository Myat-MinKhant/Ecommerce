import { AppBar, Box, Container, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSubTotal } from "../redux/functions/cartSlice";

const Nav = () => {
  const { cartTotalQuantity, cartItems } = useSelector(state => state.cartItems)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubTotal())
  }, [cartItems, dispatch])

  return (
    <>
      <AppBar className=' nav-bar bg-main h-64 static w-screen tablet:h-20 laptop:h-26'>
        <Container className=' h-full w-screen tablet:flex tablet:items-center tablet:justify-between laptop:px-20'>
          <Link to='/' className=" no-underline">
            <Typography
              component={"p"}
              className=' nav-logo text-second font-main text-3xl my-3 text-center tablet:text-start tablet:my-0 laptop:my-0'>
              Ecommerce
            </Typography>
          </Link>
          <Box className=' nav-list flex flex-col items-center gap-3 tablet:flex-row '>
            <Link to='/' className=' nav-item text-third decoration-transparent laptop:mr-5'>
              Home
            </Link>
            <Link to='/all-products' className=' nav-link text-third decoration-transparent laptop:mr-5'>
              All products
            </Link>
            <Link
              to='/categories'
              className=' nav-link text-third decoration-transparent laptop:mr-5'>
              Categories
            </Link>
            <Link to='/account' className=' nav-link text-third decoration-transparent laptop:mr-5'>
              Account
            </Link>
            <Link to='/cart' className=' nav-link text-third decoration-transparent laptop:mr-5'>
              Cart ({cartTotalQuantity})
            </Link>
          </Box>
          <Link to='/search' className=" search-box">
            <Search className=' search-button text-black cursor-pointer bg-second min-w-full mt-4 rounded-lg tablet:min-w-fit tablet:mt-0 tablet:rounded-none tablet:bg-transparent tablet:text-third' />
          </Link>
        </Container>
      </AppBar>
    </>
  );
};

export default Nav;

/*

      



*/
