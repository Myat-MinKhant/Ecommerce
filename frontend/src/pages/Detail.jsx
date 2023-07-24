import { AddBox, ShoppingCart } from '@mui/icons-material'
import { Box, Button, Container, Divider, List, Rating, TextField, Typography } from '@mui/material'
import React from 'react'
import { addToCart } from '../redux/functions/cartSlice'
import { addToWishList } from '../redux/functions/wishListSlice'
import { useSelector, useDispatch } from 'react-redux'

const style = {
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "black"
        },
        color: 'black'
    }
}

const Detail = () => {
    const { productDetail } = useSelector(state => state.productDetail)
    const dispatch = useDispatch();

    return (
        <div className=' bg-second w-screen h-fit'>
            <Container className=' px-14 pb-10'>
                <Box className=' w-full h-fit mb-12 laptop:flex '>
                    <Box className=' laptop:w-4/12 h-72 mt-12 mr-20 bg-white rounded-xl'>
                        <Box className=' flex h-2/3 mt-2'>
                            <img className=" w-5/12 h-5/6 m-auto"
                                alt='productImage'
                                src={productDetail.image}
                            />
                        </Box>
                        <Box className=' h-1/3 flex'>
                            <Typography className=' m-auto'>More Image...</Typography>
                        </Box>
                    </Box>
                    <Box className=' laptop:w-7/12 mt-16'>
                        <Typography className=' text-3xl font-extrabold mb-5'>{productDetail.name}</Typography>
                        <Typography className=' text-lg mb-5'>{productDetail.description}</Typography>
                        <Box className=' flex items-center gap-5'>
                            <Typography className=' text-2xl'>${productDetail.price}</Typography>
                            <Button
                                className=' text-white bg-green-950 h-10 font-bold capitalize w-fit px-7'
                                startIcon={<ShoppingCart />} onClick={() => dispatch(addToCart(productDetail))}>
                                Add to cart
                            </Button>
                            <Button
                                className=' text-white bg-yellow-700 h-10 font-bold capitalize w-fit px-7'
                                startIcon={<AddBox />} onClick={() => dispatch(addToWishList(productDetail))}>
                                Add to wishlist
                            </Button>
                        </Box>

                    </Box>
                </Box>

                <Box className=' w-full h-fit'>
                    <Typography className=' text-2xl font-extrabold mb-5'> Reviews</Typography>
                    <Box className=' laptop:flex laptop:gap-5 w-full mt-2'>
                        <Box className=' laptop:w-1/2 h-fit bg-white shadow-sm px-8 py-12 rounded-xl'>
                            <Typography className=' text-lg font-extrabold mb-5'>Add a review</Typography>
                            <Rating
                                name="simple-controlled"
                                className=' mb-2 text-green-950'
                            // value={value}
                            // onChange={(event, newValue) => {
                            //     setValue(newValue);
                            // }}
                            />
                            <Box className=' mb-2'>
                                <TextField sx={style}
                                    variant="outlined" size='small' placeholder='Title' className=' w-full' />
                            </Box>
                            <Box className=' mb-3'>
                                <TextField sx={style}
                                    variant="outlined" multiline
                                    rows={2} size='small' placeholder='Was it good? Pros? Cons?' className=' w-full' />
                            </Box>
                            <Button className='laptop:w-1/2 bg-green-950 rounded-md' size='large'>
                                <Typography component={'p'} className=' text-md capitalize tracking-widest text-white'>Submit your review</Typography>
                            </Button>
                        </Box>
                        <Box className=' laptop:w-1/2 h-fit bg-white shadow-sm px-10 py-12 rounded-xl'>
                            <Typography className=' text-lg font-extrabold mb-5'>All review</Typography>
                            <Divider className=' bg-second' />

                            <List className='w-full'>
                                <Box className=' w-full'>
                                    <Box className=' flex items-center justify-between'>
                                        <Rating name="read-only"
                                            className=' mb-2 text-green-950'
                                            value={2}
                                            readOnly
                                        />
                                        <Typography component={'span'} className=' text-end text-sm text-third font-bold'>2023-04-06 17:35:38</Typography>
                                    </Box>
                                    <Box className='w-full'>
                                        <Typography className=' text-lg '>Slow delivery! :( </Typography>
                                        <Typography className=' text-sm text-third font-bold'>the product was good but the delivery was super slow. Better to order somewhere else next time. </Typography>
                                    </Box>
                                    <Divider className='bg-second mt-5' />
                                </Box>
                            </List>
                            <List className='w-full'>
                                <Box className=' w-full'>
                                    <Box className=' flex items-center justify-between'>
                                        <Rating name="read-only"
                                            className=' mb-2 text-green-950'
                                            value={5}
                                            readOnly
                                        />
                                        <Typography component={'span'} className=' text-end text-sm text-third font-bold'>2023-04-06 15:20:02</Typography>
                                    </Box>
                                    <Box className='w-full'>
                                        <Typography className=' text-lg '>Really good! </Typography>
                                        <Typography className=' text-sm text-third font-bold'>Works really good and i love it!</Typography>
                                    </Box>
                                    <Divider className='bg-second mt-5' />
                                </Box>
                            </List>
                            <List className='w-full'>
                                <Box className=' w-full'>
                                    <Box className=' flex items-center justify-between'>
                                        <Rating name="read-only"
                                            className=' mb-2 text-green-950'
                                            value={3}
                                            readOnly
                                        />
                                        <Typography component={'span'} className=' text-end text-sm text-third font-bold'>2022-12-20 12:58:56</Typography>
                                    </Box>
                                    <Box className='w-full'>
                                        <Typography className=' text-lg '>Nice! </Typography>
                                        <Typography className=' text-sm text-third font-bold'>Arrive safely but delivery time long!</Typography>
                                    </Box>
                                    <Divider className='bg-second mt-5' />
                                </Box>
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Detail