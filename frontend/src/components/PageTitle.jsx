import { Box, Button, Container, Typography, styled } from "@mui/material";
import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import Image from "../assets/macbook.png";

const StyledBox = styled("div")({
  width: "100%",
  height: "300px",
  backgroundImage: `url(${Image})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

const PageTitle = () => {
  return (
    <div div className=" bg-main tablet:pb-5 laptop:pb-0 laptop:pt-16 ">
      <Container className='mobile:pb-10 tablet:flex tablet:flex-row-reverse tablet:pb-4 laptop:gap-10 laptop:px-20 laptop:pb-1'>
        <Box className='min-w-fit tablet:w-1/2 laptop:w-3/5'>
          <StyledBox className=' mobile:p-0  tablet:mt-5' />
        </Box>
        <Box className='tablet:w-1/2 tablet:m-0 laptop:mr-9'>
          <Typography
            variant='h2'
            className='title-header font-main text-second text-3xl mb-4 tablet:pt-20 tablet:text-6xl laptop:pt-8 laptop:mb-10 '>
            Macbook 14 Pro
          </Typography>
          <Typography
            variant='body1'
            className=' title-body font-main text-third mb-5 laptop:mb-8'>
            Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and
            efficiency further than ever.It delivers exceptional performance
            whether it's plugged in or not, and now has even longer battery
            life.
          </Typography>
          <Box className='mobile:flex mobile:gap-2 laptop:mb-10'>
            <Button className=' read-more-button text-second border-solid border-2 font-bold mobile:w-1/3 h-11 capitalize p-5 mr-5 mobile:text-xs mobile:p-0 mobile:mr-0 tablet:text-sm tablet:w-2/6'>
              Read more
            </Button>
            <Button
              className='  pre-order-button text-main bg-second font-bold p-5 h-11 capitalize mobile:w-2/3 mobile:text-sm tablet:text-sm tablet:w-5/12' startIcon={<ShoppingCart />}>
              Pre-Order
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default PageTitle;
