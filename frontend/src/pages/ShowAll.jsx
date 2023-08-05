import React, { useRef } from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, Card, Checkbox, Container, FormControl, MenuItem, Select, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToWishList } from '../redux/functions/wishListSlice'
import { addToCart } from '../redux/functions/cartSlice'
import { productDetailShow } from '../redux/functions/productDetailSlice'
import { filterByColor, filterByPriceLowestToHighest, filterByPriceHighestToLowest } from '../redux/functions/ShowAllProductSlice'

function ShowAll() {
    const { wishListItems } = useSelector(state => state.wishListItems)
    const { showAllProduct } = useSelector(state => state.showAllProduct)
    const colors = useRef(['All', 'Black', 'Red', 'Purple', 'Blue', 'Silver', 'White', 'Green'])
    const dispatch = useDispatch();

    const category = showAllProduct.filterProducts || showAllProduct.products;

    const handleFilterByColor = (e) => {
        dispatch(filterByColor({ value: e.target.value, list: showAllProduct }));
    }

    return (
        <div className='w-screen overflow-hidden bg-second h-cart'>
            <Container className="pt-5 px-14" key={showAllProduct.id}>
                <Box className=''>
                    <Box className='flex items-center justify-between mb-5 pr-7'>
                        <Typography component={"p"} className='mb-5 text-3xl font-extrabold laptop:ml-7'>
                            {showAllProduct.title}
                        </Typography>
                        <Box className='flex items-center gap-5'>
                            <FormControl sx={{
                                "& fieldset": { border: 'none' },
                            }} size='small' className='h-10 bg-gray-300 border-0 rounded-lg outline-none w-36' >
                                <Select defaultValue={'All'} onChange={handleFilterByColor}>
                                    {colors.current.map(color => (
                                        <MenuItem value={color} >
                                            <Typography>color: {color}</Typography>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl sx={{
                                "& fieldset": { border: 'none' },
                            }} size='small' className='h-10 bg-gray-300 border-0 rounded-lg outline-none w-48' >
                                <Select defaultValue={0} >
                                    <MenuItem value={0}>Sort: All</MenuItem>
                                    <MenuItem value={1} onClick={() => dispatch(filterByPriceLowestToHighest(showAllProduct))}>Sort: lowest price</MenuItem>
                                    <MenuItem value={2} onClick={() => dispatch(filterByPriceHighestToLowest(showAllProduct))}>Sort: highest price</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Box sx={{ height: "300px" }}
                        className='flex flex-wrap items-center gap-5 mobile:justify-center mobile:gap-10 tablet:gap-5 laptop:gap-0 tablet:justify-start laptop:ml-7'>
                        {category.length === 0
                            ? <Typography variant={'h6'} className=' w-full text-center'>No Product Found....</Typography>
                            : category.map(product => (
                                <Box className=' tablet:mb-5 laptop:mb-8' key={product.id}>
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
                                            <Button className='h-5 p-4 font-bold text-green-900 capitalize border-2 border-solid text-md w-30 tablet:mr-3 laptop:mr-5'
                                                onClick={() => dispatch(addToCart(product))}>
                                                Add to cart
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Container>

        </div >
    )
}

export default ShowAll