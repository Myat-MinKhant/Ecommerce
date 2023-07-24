import { Box, Button, Container, Typography, styled } from "@mui/material";
import React from "react";
import { colors } from "@mui/material";
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
    <>
      <Box sx={{ backgroundColor: colors.grey[900] }} className='laptop:pt-16'>
        <Container className='mobile:pb-10 tablet:flex tablet:flex-row-reverse tablet:pb-4 laptop:gap-10 laptop:px-20 laptop:pb-1'>
          <Box className='min-w-fit tablet:w-1/2 laptop:w-3/5'>
            <StyledBox className=' mobile:p-0 tablet:mt-5' />
          </Box>
          <Box className='tablet:w-1/2 tablet:m-0 laptop:mr-12'>
            <Typography
              variant='h2'
              className='text-second mb-4 tablet:pt-20 laptop:pt-10 laptop:mb-10 tablet:text-6xl'>
              Macbook 14 Pro
            </Typography>
            <Typography
              variant='body1'
              className=' text-third mb-5 laptop:mb-8'>
              Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and
              efficiency further than ever.It delivers exceptional performance
              whether it's plugged in or not, and now has even longer battery
              life.
            </Typography>
            <Box className='mobile:flex mobile:gap-2 laptop:mb-10'>
              <Button className=' text-second border-solid border-2 font-bold mobile:w-1/2 h-11 capitalize p-5 mr-5 mobile:text-xs mobile:p-0 mobile:mr-0 tablet:text-sm tablet:w-2/6'>
                Read more
              </Button>
              <Button
                className=' text-gray-900 bg-second font-bold mobile:w-1/2 h-11 capitalize p-5 mobile:text-xs tablet:text-sm tablet:w-5/12'
                startIcon={<ShoppingCart />}>
                Add to cart
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PageTitle;
