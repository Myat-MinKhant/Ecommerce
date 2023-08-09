import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, Card, Container, Typography, Checkbox } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../redux/functions/productsApi'
import { addToCart } from '../redux/functions/cartSlice'
import { addToWishList } from '../redux/functions/wishListSlice'
import { Link } from 'react-router-dom'
import { productDetailShow } from '../redux/functions/productDetailSlice'

const AllProducts = () => {
  const { products } = useSelector(state => state.products)
  const { wishListItems } = useSelector(state => state.wishListItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className='w-full h-fit'>
      <Container className="h-full pt-5 laptop:px-14">
        <Box>
          <Typography component={"p"} className='text-3xl font-extrabold font-main laptop:ml-7'>
            All products
          </Typography>
        </Box>
        <Box
          sx={{ height: '100%', width: 'content' }}
          className='flex flex-wrap items-center justify-center my-5 gap-10 laptop:justify-start tablet:gap-5 laptop:gap-0 laptop:ml-7'>
          {products.map(product => (
            <Box className=' tablet:mb-5 laptop:mb-8'>
              <Card className='w-48 h-48 bg-transparent shadow-none rounded-xl'>
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
                  <Button className='h-5 p-4 mr-5 font-bold text-green-900 capitalize border-2 border-solid text-md w-30'
                    onClick={() => dispatch(addToCart(product))}>
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}

        </Box>
      </Container>
    </div>
  )
}

export default AllProducts