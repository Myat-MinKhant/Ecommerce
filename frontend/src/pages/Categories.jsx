import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Card, Checkbox, Button } from "@mui/material";
import { Favorite, ArrowRightAlt, FavoriteBorder } from '@mui/icons-material'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../redux/functions/cartSlice'
import { addToWishList } from '../redux/functions/wishListSlice'
import { productDetailShow } from '../redux/functions/productDetailSlice'
import { getCategories } from "../redux/functions/categoriesApi";
import { showAllProduct } from '../redux/functions/filterProductSlice'

const Categories = () => {
  const { categories } = useSelector(state => state.categories)
  const { wishListItems } = useSelector(state => state.wishListItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <div className='w-full bg-second h-fit'>
      {categories.map(category => (
        <Container className="px-14" key={category.id}>
          <Box className='mt-5 '>
            <Typography component={"p"} className='mb-5 text-3xl font-extrabold laptop:ml-7'>
              {category.title}
            </Typography>
            <Box className=" max-w-max overflow-auto no-scrollbar">
              <Box sx={{ height: "300px" }} className='flex min-w-max items-center gap-5 mobile:justify-center mobile:gap-10 tablet:gap-5 laptop:gap-0 tablet:justify-start laptop:ml-7'>
                {category.products.slice(0, 4).map(product => (
                  <Box className=' tablet:mb-5 laptop:mb-8' key={product.id}>
                    <Card className='w-48 h-48 bg-transparent shadow-none z-[10] rounded-xl'>
                      <Box className='relative flex w-full h-full bg-white'>
                        <Link to={'/detail/' + product.id} onClick={() => dispatch(productDetailShow(product))} className="m-auto "><img
                          className=' w-25 h-28'
                          alt='productImage'
                          src={product.image}
                        /></Link>
                        <Checkbox
                          className='absolute top-0 right-0 '
                          onClick={() => dispatch(addToWishList(product))}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite sx={{ color: 'red' }} />}
                          checked={wishListItems.some(wish => wish.id === product.id)}
                        />
                      </Box>
                    </Card>
                    <Box className='mt-2 '>
                      <Typography className='text-2xl font-semibold font-main'>
                        {product.name}
                      </Typography>
                      <Box className='flex items-center mt-1 h-15'>
                        <Typography
                          component='h2'
                          className='mr-5 text-xl font-extrabold font-main'>
                          ${product.price}
                        </Typography>
                        <Button className='h-5 p-4 font-bold text-green-900 capitalize border-2 border-solid text-md w-30 tablet:mr-3 laptop:mr-5'
                          onClick={() => dispatch(addToCart(product))}>
                          Add to cart
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                ))}
                <Card className='flex items-center justify-center w-48 h-48 ml-3 bg-gray-300 shadow-none mb-20 tablet:mb-24 laptop:mb-28 rounded-xl'>
                  <Link to={'/categories/' + category.title} onClick={() => dispatch(showAllProduct(category))} className="text-lg text-gray-700 no-underline" >
                    Show all
                  </Link>
                  <ArrowRightAlt className="text-gray-600" />
                </Card>
              </Box>
            </Box>
          </Box>
        </Container>
      ))}
    </div >
  );
};

export default Categories;
