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
      <AppBar className=' bg-main h-64 static min-w-0 tablet:h-20 laptop:h-26'>
        <Container className=' h-full min-w-full full tablet:flex tablet:items-center tablet:justify-between laptop:justify-around'>
          <Link to='/' className=" no-underline">
            <Typography
              component={"span"}
              className=' text-second text-3xl text-center my-3 tablet:text-start tablet:my-0 laptop:my-0'>
              Ecommerce
            </Typography>
          </Link>
          <Box className=' flex flex-col items-center gap-3 tablet:flex-row '>
            <Link to='/' className=' text-third decoration-transparent laptop:mr-5'>
              Home
            </Link>
            <Link to='/all-products' className=' text-third decoration-transparent laptop:mr-5'>
              All products
            </Link>
            <Link
              to='/categories'
              className=' text-third decoration-transparent laptop:mr-5'>
              Categories
            </Link>
            <Link to='/account' className=' text-third decoration-transparent laptop:mr-5'>
              Account
            </Link>
            <Link to='/cart' className=' text-third decoration-transparent laptop:mr-5'>
              Cart ({cartTotalQuantity})
            </Link>
          </Box>
          <Link to='/search'>
            <Search className=' text-black cursor-pointer bg-second min-w-full mt-4 rounded-lg tablet:min-w-fit tablet:mt-0 tablet:rounded-none tablet:bg-transparent tablet:text-third' />
          </Link>
        </Container>
      </AppBar>
    </>
  );
};

export default Nav;

/*

      



*/
