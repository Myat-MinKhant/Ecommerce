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
            <Container className=' laptop:px-20 mobile:py-10'>
                <Box className=' w-full h-fit mb-16 tablet:flex laptop:gap-6'>
                    <Box className=' bg-white mobile:w-full mobile:h-fit mobile:m-auto mobile:py-10 tablet:py-0 laptop:mt-10 tablet:w-6/12 h-72 tablet:mr-20 rounded-xl tablet:mt-5'>
                        <Box className=' flex h-2/3 tablet:mt-10 '>
                            <img className=" w-3/6 tablet:w-4/6 laptop:w-7/12 h-5/6 m-auto "
                                alt='productImage'
                                src={productDetail.image}
                            />
                        </Box>
                        <Box className=' h-1/3 flex'>
                            <Typography className=' m-auto mt-7 tablet:mt-5 tablet:pb-5 '>More Image...</Typography>
                        </Box>
                    </Box>
                    <Box className=' mobile:mt-10 tablet:w-11/12 tablet:mt-10 laptop:mt-16'>
                        <Typography className=' font-main text-3xl font-extrabold mb-5'>{productDetail.name}</Typography>
                        <Typography className=' font-main text-lg mb-5'>{productDetail.description}</Typography>
                        <Box className=' flex flex-wrap pt-3 items-center justify-between tablet:justify-start tablet:flex-nowrap gap-5 tablet:gap-3'>
                            <Typography className=' font-main tablet:font-bold text-3xl tablet:text-2xl'>${productDetail.price}</Typography>
                            <Button
                                className=' text-white bg-green-950 h-10 font-bold capitalize w-2/3 laptop:px-7 tablet:w-1/3 tablet:px-1'
                                startIcon={<ShoppingCart />} onClick={() => dispatch(addToCart(productDetail))}>
                                Add to cart
                            </Button>
                            <Button
                                className=' text-white bg-yellow-700 h-10 font-bold capitalize mobile:w-full tablet:w-6/12 tablet:px-1'
                                startIcon={<AddBox />} onClick={() => dispatch(addToWishList(productDetail))}>
                                Add to wishlist
                            </Button>
                        </Box>

                    </Box>
                </Box>

                <Box className=' w-full h-fit mobile:pt-5'>
                    <Typography className=' font-main text-3xl font-extrabold mb-5'> Reviews</Typography>
                    <Box className='  tablet:flex tablet:gap-5 w-full mt-2'>
                        <Box className=' tablet:bg-white tablet:w-1/2 h-fit shadow-none tablet:shadow-sm tablet:px-8 tablet:py-5 laptop:py-12 rounded-xl'>
                            <Typography className=' font-main text-2xl font-extrabold tablet:mb-5 mb-3'>Add a review</Typography>
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
                            <Button className='w-full laptop:w-2/3 bg-green-950 rounded-md' size='large'>
                                <Typography component={'p'} className=' text-md capitalize tracking-widest text-white'>Submit your review</Typography>
                            </Button>
                        </Box>
                        <Box className='w-full my-5 py-5 tablet:w-1/2 h-fit shadow-none tablet:bg-white tablet:shadow-sm tablet:px-5 laptop:px-10 tablet:py-5 laptop:py-12 tablet:my-0 rounded-xl'>
                            <Typography className='font-main text-2xl font-extrabold mb-5'>All review</Typography>
                            <Divider className=' bg-second' />

                            <List className='w-full'>
                                <Box className=' w-full'>
                                    <Box className=' tablet:flex tablet:items-center tablet:justify-between'>
                                        <Rating name="read-only"
                                            className=' mb-2 text-green-950'
                                            value={2}
                                            readOnly
                                        />
                                        <Typography component={'p'} className=' tablet:text-end text-sm text-third font-bold'>2023-04-06 17:35:38</Typography>
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
                                    <Box className=' tablet:flex tablet:items-center tablet:justify-between'>
                                        <Rating name="read-only"
                                            className=' mb-2 text-green-950'
                                            value={5}
                                            readOnly
                                        />
                                        <Typography component={'p'} className=' tablet:text-end text-sm text-third font-bold'>2023-04-06 15:20:02</Typography>
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
                                    <Box className=' tablet:flex tablet:items-center tablet:justify-between'>
                                        <Rating name="read-only"
                                            className=' mb-2 text-green-950'
                                            value={3}
                                            readOnly
                                        />
                                        <Typography component={'p'} className=' tablet:text-end text-sm text-third font-bold'>2022-12-20 12:58:56</Typography>
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