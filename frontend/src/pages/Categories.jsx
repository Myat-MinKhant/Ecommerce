import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Card, Button, Checkbox } from "@mui/material";
import { Favorite, ArrowRightAlt, Sync, FavoriteBorder } from '@mui/icons-material'
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/functions/productsApi";
import { addToCart } from '../redux/functions/cartSlice'
import { addToWishList } from '../redux/functions/wishListSlice'
import { productDetailShow } from '../redux/functions/productDetailSlice'

const Categories = () => {
  const { products } = useSelector(state => state.products)
  const { wishListItems } = useSelector(state => state.wishListItems)
  const { showMore } = useSelector(state => state.showMore)
  const dispatch = useDispatch()
  // const initialProducts = products.slice( 0, showMore.index)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  function test() {
    const array = products.map(product => product)
    for (var i in array) console.log(i);
  }
  test();

  return (
    <div className='bg-second w-screen h-screen'>
      {products.map(product => (
        <Container>
          <Box className=' category-iphone'>
            <Typography component={"p"} className=' text-3xl font-extrabold laptop:ml-7'>
              names
            </Typography>
            <Box sx={{ height: "300px" }}
              className='flex flex-wrap gap-5 items-center mobile:justify-center mobile:gap-10 tablet:gap-5 laptop:gap-0 tablet:justify-start laptop:ml-7'>
              {product.categories.iphone.slice(0, 4).map(item => (
                <Box className=' tablet:mb-5 laptop:mb-8'>
                <Card className=' w-48 h-48 shadow-none rounded-xl bg-transparent '>
                  <Box className='flex w-full h-full bg-white relative'>
                    <Link to={'/detail/' + item.id} onClick={() => dispatch(productDetailShow(item))} className=" m-auto"><img
                      className=' w-25 h-28'
                      alt='productImage'
                      src={item.image}
                    /></Link>
                    <Checkbox
                      className=' absolute top-0 right-0'
                      onClick={() => dispatch(addToWishList(item))}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite sx={{ color: 'red' }} />}
                      checked={wishListItems.some(wish => wish.id === item.id)}
                    />
                  </Box>
                </Card>
                <Box className=' mt-2'>
                  <Typography className=' font-main text-2xl font-semibold'>
                    {item.name}
                  </Typography>
                  <Box className='mt-1 flex items-center h-15'>
                    <Typography
                      component='h2'
                      className=' font-main text-xl font-extrabold mr-5'>
                      ${item.price}
                    </Typography>
                    <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 mr-5'
                      onClick={() => dispatch(addToCart(item))}>
                      Add to cart
                    </Button>
                  </Box>
                </Box>
              </Box>
              ))}
              <Card className=' w-48 h-48 mb-28 rounded-xl bg-gray-300 shadow-none flex items-center justify-center ml-3'>
                <Link className="text-gray-700 text-lg no-underline" >
                  Show all
                </Link>
                <ArrowRightAlt className="text-gray-600" />
              </Card>
            </Box>
          </Box>

          <Box className=' category-ipad'>
            <Typography component={"p"} className=' text-3xl font-extrabold laptop:ml-7'>
              iPads
            </Typography>
            <Box sx={{ height: "300px" }}
              className='flex flex-wrap gap-5 items-center mobile:justify-center mobile:gap-10 tablet:gap-5 laptop:gap-0 tablet:justify-start laptop:ml-7'>
              {product.categories.ipad.slice(0, 4).map(item => (
                <Box key={item.id}>
                  <Card className=' w-48 h-48 rounded-xl bg-transparent' >
                    <Box className='flex w-full h-full bg-white relative'>
                      <img
                        className=' w-25 h-28 m-auto'
                        alt={item.name}
                        src={item.image}
                      />
                      <Favorite className=' absolute top-2 left-40 text-red-600' />
                    </Box>
                  </Card>
                  <Box className=' mt-2'>
                    <Typography className=' text-sm font-semibold'>
                      {item.name}
                    </Typography>
                    <Box className='mt-1 flex items-center h-15'>
                      <Typography
                        component='h2'
                        className=' text-lg font-extrabold mr-5'>
                        ${item.price}
                      </Typography>
                      <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 mr-5'>
                        Add to cart
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
              <Card className=' w-48 h-48 rounded-xl bg-gray-300 mb-16 shadow-none flex items-center justify-center  ml-3'>
                <Link className="text-gray-700 text-lg no-underline" >
                  Show all
                </Link>
                <ArrowRightAlt className="text-gray-600" />
              </Card>
            </Box>
          </Box>
        </Container>
      ))}
    </div >
  );
};

export default Categories;
