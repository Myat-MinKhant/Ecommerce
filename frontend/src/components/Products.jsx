import { Box, Card, Typography, Button, Container, Checkbox } from "@mui/material";
import React, { useEffect } from "react";
import { colors } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/functions/productsApi";
import { addToCart } from "../redux/functions/cartSlice";
import { Link } from "react-router-dom";
import { addToWishList } from "../redux/functions/wishListSlice"
import { productDetailShow } from '../redux/functions/productDetailSlice'

const Products = () => {
  const { products, loading } = useSelector(state => state.products);
  const { wishListItems } = useSelector(state => state.wishListItems);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts());
  }, [])

  // if (loading) {
  //   return <>Loading...</>
  // }

  return (
    <>
      <Container className=" h-fit">
        <Typography className=' text-4xl mt-12 mb-2 mobile:mb-5 laptop:ml-14'>
          New Arrivals
        </Typography>
        <Box
          sx={{ height: "400px" }}
          className='flex flex-wrap items-center h-fit mobile:justify-center mobile:gap-10 tablet:gap-5 laptop:gap-0 laptop:justify-start laptop:ml-14'>
          {products.map((product) => (
            <Box key={product.id} className='mr-6 mb-10' >
              <Card className=' w-48 h-48 rounded-xl bg-transparent'>
                <Box className='flex w-full h-full bg-white relative'>
                  <Link to={'/detail/' + product.id} onClick={() => dispatch(productDetailShow(product))} className=" m-auto"><img
                    className=' w-25 h-28'
                    alt='productImage'
                    src={product.image}
                  /></Link>
                  <Checkbox
                    className=' absolute top-0 right-0'
                    onClick={() => dispatch(addToWishList(product))}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: 'red' }} />}
                    checked={wishListItems.some(wish => wish.id === product.id)}
                  />
                </Box>
              </Card>
              <Box className=' mt-2'>
                <Typography className=' text-lg font-semibold'>
                  {product.name}
                </Typography>
                <Box className='mt-1 flex items-center h-15 w-48'>
                  <Typography
                    component='h2'
                    className=' w-1/3 text-lg font-extrabold'>
                    ${Math.round(product.price)}
                  </Typography>
                  <Button className=' text-green-900 border-solid border-2 text-md font-bold h-5 capitalize p-5' onClick={() => dispatch(addToCart(product))}>
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Products;
