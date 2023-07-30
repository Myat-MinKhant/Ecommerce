import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Card, Button } from "@mui/material";
import { Favorite, ArrowRightAlt, Sync } from '@mui/icons-material'
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/functions/productsApi";

const Categories = () => {
  const { products } = useSelector(state => state.products)
  const { wishListItems } = useSelector(state => state.wishListItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  function test() {
    const array = products.map(product => product)
    console.log(array);
  }
  test();

  return (
    <div className='bg-second w-screen h-fit'>
      <Container className="pt-5">
        <Box className='flex items-end'>
          <Typography component={"p"} className=' text-3xl font-extrabold laptop:ml-7'>
            iPhones
          </Typography>
        </Box>

        <Box
          sx={{ height: "300px" }}
          className='flex flex-wrap gap-5 items-center mobile:justify-center mobile:gap-10 tablet:gap-5 laptop:gap-0 laptop:justify-start laptop:ml-7'>
          <Box>
            <Card className=' w-48 h-48 rounded-xl bg-transparent'>
              <Box className='flex w-full h-full bg-white relative'>
                <img
                  className=' w-25 h-28 m-auto'
                  alt=''
                  src='https://m.media-amazon.com/images/I/51KFr6xZHhL._AC_UF894,1000_QL80_.jpg'
                />
                <Favorite className=' absolute top-2 left-40 text-red-600' />
              </Box>
            </Card>
            <Box className=' mt-2'>
              <Typography className=' text-sm font-semibold'>
                Xiaomi Redmi Note 11
              </Typography>
              <Box className='mt-1 flex items-center h-15'>
                <Typography
                  component='h2'
                  className=' text-lg font-extrabold mr-5'>
                  $899
                </Typography>
                <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 mr-5'>
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Card className=' w-48 h-48 rounded-xl bg-transparent'>
              <Box className='flex w-full h-full bg-white relative'>
                <img
                  className=' w-25 h-28 m-auto'
                  alt=''
                  src='https://m.media-amazon.com/images/I/51KFr6xZHhL._AC_UF894,1000_QL80_.jpg'
                />
                <Favorite className=' absolute top-2 left-40 text-red-600' />
              </Box>
            </Card>
            <Box className=' mt-2'>
              <Typography className=' text-sm font-semibold'>
                Xiaomi Redmi Note 11
              </Typography>
              <Box className='mt-1 flex items-center h-15'>
                <Typography
                  component='h2'
                  className=' text-lg font-extrabold mr-5'>
                  $899
                </Typography>
                <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 mr-5'>
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Card className=' w-48 h-48 rounded-xl bg-transparent'>
              <Box className='flex w-full h-full bg-white relative'>
                <img
                  className=' w-25 h-28 m-auto'
                  alt=''
                  src='https://m.media-amazon.com/images/I/51KFr6xZHhL._AC_UF894,1000_QL80_.jpg'
                />
                <Favorite className=' absolute top-2 left-40 text-red-600' />
              </Box>
            </Card>
            <Box className=' mt-2'>
              <Typography className=' text-sm font-semibold'>
                Xiaomi Redmi Note 11
              </Typography>
              <Box className='mt-1 flex items-center h-15'>
                <Typography
                  component='h2'
                  className=' text-lg font-extrabold mr-5'>
                  $899
                </Typography>
                <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 mr-5'>
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
          <Card className=' w-48 h-48 rounded-xl bg-gray-300 mb-16 shadow-none flex justify-center items-center'>
            <Link className="text-gray-700 text-lg no-underline" >Show all</Link>
            <ArrowRightAlt className="text-gray-600" />
          </Card>
        </Box>
      </Container>
      <Container className="pt-16">
        <Box className='flex items-end'>
          <Typography component={"p"} className=' text-3xl font-extrabold laptop:ml-7'>
            Headphones
          </Typography>
          <Link className=' text-gray-700 text-lg ml-3'>Show all</Link>
        </Box>

        <Box
          sx={{ height: "300px" }}
          className='flex flex-wrap gap-5 items-center mobile:justify-center mobile:gap-10 tablet:gap-5 laptop:gap-0 laptop:justify-start laptop:ml-7'>
          <Box>
            <Card className=' w-48 h-48 rounded-xl bg-transparent'>
              <Box className='flex w-full h-full bg-white relative'>
                <img
                  className=' w-25 h-28 m-auto'
                  alt=''
                  src='https://m.media-amazon.com/images/I/51KFr6xZHhL._AC_UF894,1000_QL80_.jpg'
                />
                <Favorite className=' absolute top-2 left-40 text-red-600' />
              </Box>
            </Card>
            <Box className=' mt-2'>
              <Typography className=' text-sm font-semibold'>
                Xiaomi Redmi Note 11
              </Typography>
              <Box className='mt-1 flex items-center h-15'>
                <Typography
                  component='h2'
                  className=' text-lg font-extrabold mr-5'>
                  $899
                </Typography>
                <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 mr-5'>
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Card className=' w-48 h-48 rounded-xl bg-transparent'>
              <Box className='flex w-full h-full bg-white relative'>
                <img
                  className=' w-25 h-28 m-auto'
                  alt=''
                  src='https://m.media-amazon.com/images/I/51KFr6xZHhL._AC_UF894,1000_QL80_.jpg'
                />
                <Favorite className=' absolute top-2 left-40 text-red-600' />
              </Box>
            </Card>
            <Box className=' mt-2'>
              <Typography className=' text-sm font-semibold'>
                Xiaomi Redmi Note 11
              </Typography>
              <Box className='mt-1 flex items-center h-15'>
                <Typography
                  component='h2'
                  className=' text-lg font-extrabold mr-5'>
                  $899
                </Typography>
                <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 mr-5'>
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
          <Card className=' w-48 h-48 rounded-xl bg-gray-300 mb-16 shadow-none flex justify-center items-center'>
            <Link className="text-gray-700 text-lg no-underline" >Show all</Link>
            <ArrowRightAlt className="text-gray-600" />
          </Card>
        </Box>
      </Container>

    </div>
  );
};

export default Categories;
