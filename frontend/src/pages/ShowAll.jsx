import React, { useRef, useState } from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, Card, Checkbox, Container, FormControl, MenuItem, Select, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToWishList } from '../redux/functions/wishListSlice'
import { addToCart } from '../redux/functions/cartSlice'
import { productDetailShow } from '../redux/functions/productDetailSlice'
import { filterBySort, filterByColor } from '../redux/functions/filterProductSlice'

function ShowAll() {
    const { wishListItems } = useSelector(state => state.wishListItems)
    const { showAllProduct } = useSelector(state => state.filterProduct)
    const colors = useRef(['All', 'black', 'red', 'purple', 'blue', 'silver', 'white', 'green'])
    const sorts = useRef(['All', 'lowest price', 'highest price'])
    const [colorOption, setColorOption] = useState('All')
    const [sortOption, setSortOption] = useState('All')
    const dispatch = useDispatch();

    const category = showAllProduct.filterProducts || showAllProduct.products;

    const handleBySort = (e) => {
        setSortOption(e.target.value)
        dispatch(filterBySort({ sort: e.target.value, list: showAllProduct, colorOption }))
    }
    const handleByColor = (e) => {
        setColorOption(e.target.value)
        dispatch(filterByColor({ color: e.target.value, list: showAllProduct, sortOption }))
    }

    return (
        <div className='w-full bg-second h-fit mobile:pb-5 tablet:pb-0 overflow-x-hidden'>
            <Container className="pt-5 laptop:px-14 h-full w-full" key={showAllProduct.id}>
                <Box>
                    <Box className='flex flex-col tablet:flex-row items-center tablet:justify-between mb-5'>
                        <Typography component={"p"} className='mb-5 text-3xl font-extrabold laptop:ml-7'>
                            {showAllProduct.title}
                        </Typography>
                        <Box className='flex items-center gap-5 laptop:pr-5'>
                            <FormControl sx={{
                                "& fieldset": { border: 'none' },
                            }} size='small' className='h-10 bg-gray-300 border-0 rounded-lg outline-none w-36' >
                                <Select defaultValue={'All'} onChange={handleByColor}>
                                    {colors.current.map(color => (
                                        <MenuItem value={color} >
                                            <Typography>color: {color}</Typography>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{
                                "& fieldset": { border: 'none' },
                            }} size='small' className='h-10 bg-gray-300 border-0 rounded-lg outline-none w-36 tablet:w-48' >
                                <Select defaultValue={'All'} onChange={handleBySort}>
                                    {sorts.current.map(sort => (
                                        <MenuItem value={sort}>Sort: {sort}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Box
                        className='flex flex-wrap items-center pb-8 mobile:justify-center mobile:gap-10 laptop:gap-0 tablet:justify-start laptop:ml-7'>
                        {category.length === 0
                            ? <Typography variant={'h6'} className='w-full mt-10 laptop:mt-0 text-center h-[350px]'>No Product Found....</Typography>
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