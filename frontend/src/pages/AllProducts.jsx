import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, Card, Container, Typography,  Checkbox } from '@mui/material'
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
    <div className=' w-screen h-fit'>
      <Container className="pt-5 h-full">
        <Box>
          <Typography component={"p"} className=' font-main text-3xl font-extrabold laptop:ml-7'>
            All products
          </Typography>
        </Box>
        <Box
          sx={{ height: '100%', width: 'content' }}
          className='flex flex-wrap my-5 items-center mobile:justify-center mobile:gap-10 tablet:gap-5 laptop:gap-0 laptop:justify-start laptop:ml-7'>
          {products.map(product => (
            <Box className=' tablet:mb-5 laptop:mb-8'>
              <Card className=' w-48 h-48 shadow-none rounded-xl bg-transparent '>
                <Box className='flex w-full h-full bg-white relative'>
                  <Link to={'/detail/'+ product.id} onClick={() => dispatch(productDetailShow(product))} className=" m-auto"><img
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
                <Typography className=' font-main text-2xl font-semibold'>
                  {product.name}
                </Typography>
                <Box className='mt-1 flex items-center h-15'>
                  <Typography
                    component='h2'
                    className=' font-main text-xl font-extrabold mr-5'>
                    ${product.price}
                  </Typography>
                  <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 mr-5'
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