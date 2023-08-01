import React from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, Card, Checkbox, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToWishList } from '../redux/functions/wishListSlice'
import { addToCart } from '../redux/functions/cartSlice'
import { productDetailShow } from '../redux/functions/productDetailSlice'

function ShowAll() {
    const { wishListItems } = useSelector(state => state.wishListItems)
    const { showAllProduct } = useSelector(state => state.showAllProduct)
    const dispatch = useDispatch()

    console.log(showAllProduct)
    const category = showAllProduct;

    return (
        <div className='bg-second w-screen h-cart overflow-hidden'>
            <Container className=" pt-5 px-14" key={category.id}>
                <Box className=' mt-5'>
                    <Typography component={"p"} className=' text-3xl mb-5 font-extrabold laptop:ml-7'>
                        {category.title}
                    </Typography>
                    <Box sx={{ height: "300px" }}
                        className='flex flex-wrap gap-5 items-center mobile:justify-center mobile:gap-10 tablet:gap-5 laptop:gap-0 tablet:justify-start laptop:ml-7'>
                        {category.products.map(product => (
                            <Box className=' tablet:mb-5 laptop:mb-8' key={product.id}>
                                <Card className=' w-48 h-48 shadow-none rounded-xl bg-transparent '>
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
                                    <Typography className=' font-main text-2xl font-semibold'>
                                        {product.name}
                                    </Typography>
                                    <Box className='mt-1 flex items-center h-15'>
                                        <Typography
                                            component='h2'
                                            className=' font-main text-xl font-extrabold mr-5'>
                                            ${product.price}
                                        </Typography>
                                        <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 tablet:mr-3 laptop:mr-5'
                                            onClick={() => dispatch(addToCart(product))}>
                                            Add to cart
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>

        </div >
    )
}

export default ShowAll