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
        <div className=' bg-second w-screen h-fit'>
            <Container className='flex h-fit'>
                <Box className=' w-4/6 py-10 my-10 rounded-xl bg-white px-10 ml-6 shadow-xl'>
                    <Typography id='order' component={'span'} className=' cursor-pointer text-4xl mr-7 underline underline-offset-8' onClick={orderShow}>Orders</Typography>
                    <Typography id='wish-list' component={'span'} className=' cursor-pointer text-4xl text-third ' onClick={wishListShow}>Wistlist</Typography>
                    <Box display={orderDisplay}>
                        <List className=' mt-10'>
                            <Box>
                                <ListItem className=' flex w-full pl-0 items-center'>
                                    <Box className='w-1/2'>
                                        <Typography className=' text-lg mb-2'>2023-04-05 17:35:38</Typography>
                                        <Typography className=' text-sm text-third'>Myat Min Khant</Typography>
                                        <Typography className=' text-sm text-third'>myatminkhant.123@gmail.com</Typography>
                                        <Typography className=' text-sm text-third'>Test 123</Typography>
                                        <Typography className=' text-sm text-third'>Yangon</Typography>
                                    </Box>
                                    <Box className='w-1/2'>
                                        <Typography component={'span'} className=' text-lg text-third'>1 x </Typography>
                                        <Typography component={'span'} className=' text-lg'>iPhone 14 Plus</Typography>
                                    </Box>
                                </ListItem>
                                <Divider className='bg-second' />
                            </Box>
                            <Box>
                                <ListItem className=' flex w-full pl-0 items-center'>
                                    <Box className='w-1/2'>
                                        <Typography className=' text-lg mb-2'>2023-04-07 18:06:00</Typography>
                                        <Typography className=' text-sm text-third'>Myat Min Khant</Typography>
                                        <Typography className=' text-sm text-third'>myatminkhant.123@gmail.com</Typography>
                                        <Typography className=' text-sm text-third'>Test 123</Typography>
                                        <Typography className=' text-sm text-third'>Yangon</Typography>
                                    </Box>
                                    <Box className='w-1/2'>
                                        <Typography component={'span'} className=' text-lg text-third'>1 x </Typography>
                                        <Typography component={'span'} className=' text-lg'>MacBook Air 13"</Typography>
                                    </Box>
                                </ListItem>
                                <Divider className='bg-second' />
                            </Box>
                            <Box>
                                <ListItem className=' flex w-full pl-0 items-center'>
                                    <Box className='w-1/2'>
                                        <Typography className=' text-lg mb-2'>2020-02-28 8:27:46</Typography>
                                        <Typography className=' text-sm text-third'>Myat Min Khant</Typography>
                                        <Typography className=' text-sm text-third'>myatminkhant.123@gmail.com</Typography>
                                        <Typography className=' text-sm text-third'>Test 123</Typography>
                                        <Typography className=' text-sm text-third'>Yangon</Typography>
                                    </Box>
                                    <Box className='w-1/2'>
                                        <Typography component={'span'} className=' text-lg text-third'>1 x </Typography>
                                        <Typography component={'span'} className=' text-lg'>iPhone 11 Pro</Typography>
                                    </Box>
                                </ListItem>
                                <Divider className='bg-second' />
                            </Box>
                        </List>
                    </Box>

                    <Box display={wishListDisplay}>
                        {wishListItems.length === 0 ? (
                            <Box className='mt-10'>
                                <Typography className=' text-2xl text-third'>Your wishlist is empty</Typography>
                            </Box>
                        ) : (
                            <Box className=' mt-10 flex flex-wrap justify-start'>
                                {wishListItems.map(item => (
                                    <Box className=' mx-9 mt-5 '>
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
                                                <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 mr-5'
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

                <Box className='w-3/6'>
                    <Box className='flex flex-col gap-2 bg-white pt-16 pb-10 rounded-xl w-96 ml-10 mt-10 shadow-xl' position={'sticky'}>
                        <Typography className=' text-3xl w-5/6 mx-auto font-extrabold mb-6'>Account details</Typography>
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