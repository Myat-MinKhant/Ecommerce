import { Favorite } from '@mui/icons-material'
import { Box, Button, Card, Container, Divider, IconButton, List, ListItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/functions/cartSlice'
import { addToWishList } from '../redux/functions/wishListSlice'
import { Link } from 'react-router-dom'
import { productDetailShow } from '../redux/functions/productDetailSlice'

const style = {
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "black"
        },
        color: 'black'
    }
}

const Account = () => {
    const { wishListItems } = useSelector(state => state.wishListItems)
    const [wishListDisplay, setWishListDisplay] = useState('none')
    const [orderDisplay, setOrderDisplay] = useState('block')
    const color = 'text-third'
    const underline = 'underline'
    const underlineOffset = 'underline-offset-8'
    const dispatch = useDispatch();

    function wishListShow() {
        setWishListDisplay('block')
        document.querySelector('#wish-list').classList.remove(color)
        document.querySelector('#wish-list').classList.add(underline)
        document.querySelector('#wish-list').classList.add(underlineOffset)
        document.querySelector('#order').classList.add(color)
        document.querySelector('#order').classList.remove(underline)
        document.querySelector('#order').classList.remove(underlineOffset)
        setOrderDisplay('none')
    }

    function orderShow() {
        setWishListDisplay('none')
        document.querySelector('#wish-list').classList.add(color)
        document.querySelector('#wish-list').classList.remove(underline)
        document.querySelector('#wish-list').classList.remove(underlineOffset)
        document.querySelector('#order').classList.remove(color)
        document.querySelector('#order').classList.add(underline)
        document.querySelector('#order').classList.add(underlineOffset)
        setOrderDisplay('block')
    }


    return (
        <div className=' bg-body w-full h-fit'>
            <Container className='tablet:flex h-fit gap-4 laptop:gap-0'>
                <Box className=' laptop:w-1/2 py-10 my-10 laptop:pt-14 laptop:pb-5 rounded-xl bg-white tablet:w-80 tablet:px-8 laptop:ml-8 tablet:shadow-xl'>
                    <Typography id='order' component={'span'} className=' font-main cursor-pointer laptop:text-4xl text-3xl mobile:ml-10 tablet:ml-0 mr-7 underline underline-offset-8' onClick={orderShow}>Orders</Typography>
                    <Typography id='wish-list' component={'span'} className=' font-main cursor-pointer laptop:text-4xl text-3xl text-third ' onClick={wishListShow}>Wistlist</Typography>
                    <Box display={orderDisplay}>
                        <List className=' mt-10 ml-8 tablet:ml-0'>
                            <Box>
                                <ListItem className='flex w-full mobile:flex-col tablet:flex-row pl-0 items-start tablet:items-start laptop:items-center'>
                                    <Box className='tablet:w-1/2'>
                                        <Typography className='font-main text-xl mb-2'>2023-04-05 17:35:38</Typography>
                                        <Typography className='font-main text-md text-third'>Myat Min Khant</Typography>
                                        <Typography className='font-main text-md text-third'>myatminkhant.123@gmail.com</Typography>
                                        <Typography className='font-main text-md text-third'>Test 123</Typography>
                                        <Typography className='font-main text-md text-third'>Yangon</Typography>
                                    </Box>
                                    <Box className='tablet:w-1/2 mobile:mt-3 tablet:mt-0 laptop:text-end'>
                                        <Typography component={'span'} className=' font-main text-lg text-third'>1 x </Typography>
                                        <Typography component={'span'} className=' font-main text-lg'>iPhone 14 Plus</Typography>
                                    </Box>
                                </ListItem>
                                <Divider className='bg-second' />
                            </Box>
                            <Box>
                                <ListItem className='flex w-full pl-0 items-start mobile:flex-col tablet:flex-row tablet-items-start laptop:items-center'>
                                    <Box className='tablet:w-1/2'>
                                        <Typography className='font-main text-xl mb-2'>2023-04-07 18:06:00</Typography>
                                        <Typography className='font-main text-md text-third'>Myat Min Khant</Typography>
                                        <Typography className='font-main text-md text-third'>myatminkhant.123@gmail.com</Typography>
                                        <Typography className='font-main text-md text-third'>Test 123</Typography>
                                        <Typography className='font-main text-md text-third'>Yangon</Typography>
                                    </Box>
                                    <Box className='tablet:w-1/2 mobile:mt-3 tablet:mt-0 laptop:text-end'>
                                        <Typography component={'span'} className='font-main text-lg text-third'>1 x </Typography>
                                        <Typography component={'span'} className='font-main text-lg'>MacBook Air 13"</Typography>
                                    </Box>
                                </ListItem>
                                <Divider className='bg-second' />
                            </Box>
                            <Box>
                                <ListItem className='flex w-full pl-0 items-start mobile:flex-col tablet:flex-row tablet:items-start laptop:items-center'>
                                    <Box className='tablet:w-1/2'>
                                        <Typography className='font-main text-xl mb-2'>2020-02-28 8:27:46</Typography>
                                        <Typography className='font-main text-md text-third'>Myat Min Khant</Typography>
                                        <Typography className='font-main text-md text-third'>myatminkhant.123@gmail.com</Typography>
                                        <Typography className='font-main text-md text-third'>Test 123</Typography>
                                        <Typography className='font-main text-md text-third'>Yangon</Typography>
                                    </Box>
                                    <Box className='tablet:w-1/2 mobile:mt-3 tablet:mt-0 laptop:text-end'>
                                        <Typography component={'span'} className='font-main text-lg text-third'>1 x </Typography>
                                        <Typography component={'span'} className='font-main text-lg'>iPhone 11 Pro</Typography>
                                    </Box>
                                </ListItem>
                                <Divider className='bg-second' />
                            </Box>
                        </List>
                    </Box>

                    <Box display={wishListDisplay}>
                        {wishListItems.length === 0 ? (
                            <Box className='mt-10 text-center tablet:text-start'>
                                <Typography className=' text-2xl text-third'>Your wishlist is empty</Typography>
                            </Box>
                        ) : (
                            <Box className=' mt-7 tablet:mt-10 flex flex-wrap justify-center laptop:justify-start'>
                                {wishListItems.map(item => (
                                    <Box className=' mx-9 mt-5 laptop:mx-5 tablet:mx-0 '>
                                        <Card className=' w-48 h-48 rounded-xl bg-transparent shadow-none'>
                                            <Box className='flex w-full h-full bg-white relative'>
                                                <Link to={'/detail/' + item.id} onClick={() => dispatch(productDetailShow(item))} className=" m-auto"><img
                                                    className=' w-25 h-28'
                                                    alt='productImage'
                                                    src={item.image}
                                                /></Link>
                                                <IconButton aria-label='add to wish-list' className=' absolute top-0 right-0' onClick={() => dispatch(addToWishList(item))}>
                                                    <Favorite sx={{ color: "red" }} />
                                                </IconButton>
                                            </Box>
                                        </Card>
                                        <Box className=' mt-2 laptop:mb-5'>
                                            <Typography className=' font-main text-xl font-semibold'>
                                                {item.name}
                                            </Typography>
                                            <Box className='mt-1  flex items-center h-15'>
                                                <Typography
                                                    component='h2'
                                                    className='font-main text-2xl font-extrabold mr-5'>
                                                    ${item.price}
                                                </Typography>
                                                <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 mt-3 tablet:mr-5'
                                                    onClick={() => dispatch(addToCart(item))}>
                                                    Add to cart
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}

                            </Box>
                        )
                        }
                    </Box>
                </Box>

                <Box className=' w-full tablet:w-1/3 laptop:w-1/2'>
                    <Box className='flex flex-col gap-2 bg-white pt-8 pb-5 mb-5 tablet:mb-0 tablet:pt-14 tablet:pb-10 rounded-xl w-full tablet:w-80 laptop:w-96 ml-0 laptop:ml-10 laptop:mr-4 mt-10 shadow-xl' position={'sticky'}>
                        <Typography className=' font-main text-3xl laptop:text-4xl w-5/6 mx-auto font-extrabold tablet:mb-6 mb-4'>Account details</Typography>
                        <TextField sx={style}
                            variant="outlined" size='small' placeholder='Myat Min Khant' className='w-5/6 mx-auto' />
                        <TextField sx={style}
                            variant="outlined" size='small' placeholder='myatminkhant.123@gmail.com' className='w-5/6 mx-auto' />
                        <Box className='flex w-5/6 mx-auto gap-2'>
                            <TextField sx={style} size='small' placeholder='Test' className='w1/2' />
                            <TextField sx={style} size='small' placeholder='123' className='w1/2 ' />
                        </Box>
                        <TextField sx={style}
                            variant="outlined" size='small' placeholder='Yangon' className='w-5/6 mx-auto' />
                        <TextField sx={style}
                            variant="outlined" size='small' placeholder='Myanmar' className='w-5/6 mx-auto text-dark' />
                        <Button className='w-5/6 mx-auto bg-black rounded-md' size='large'>
                            <Typography component={'p'} className=' text-md capitalize tracking-widest text-white'>Save</Typography>
                        </Button>
                        <Divider className=' bg-second' />
                        <Button className=' w-fit bg-green-950 ml-8'>
                            <Typography component={'p'} className='text-md capitalize mx-5 text-white'>Logout</Typography>
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Account