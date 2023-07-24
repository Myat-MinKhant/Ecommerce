import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseItemQuantity, decreaseItemQuantity, getSubTotal } from '../redux/functions/cartSlice';
import { useEffect } from 'react';

const style = {
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "black"
        },
        color: 'black'
    }
}

const Cart = () => {
    const { cartItems, cartSubTotal } = useSelector(state => state.cartItems)
    const dispatch = useDispatch();
    // shippingAmount may be change later
    const shippingAmount = 5;

    useEffect(() => {
        dispatch(getSubTotal())
    }, [cartItems, dispatch])

    function handleRemoveFromCart(item) {
        if (item.quantity > 1) {
            dispatch(decreaseItemQuantity(item))
        } else if (item.quantity === 1) {
            dispatch(removeFromCart(item));
        }
    }

    function calculateFinalTotal() {
        return cartSubTotal === 0 ? cartSubTotal + 0 : cartSubTotal + shippingAmount
    }

    return (
        <>
            {cartItems.length === 0 ? (
                <div className=' bg-second w-screen h-cart'>
                    <Container className='flex'>
                        <Box className='w-1/2 h-48 py-10 mt-10 rounded-xl bg-white px-10 ml-6 shadow-xl'>
                            <Typography className=' text-3xl font-bold pl-4'>Cart</Typography>
                            <Typography className=' text-xl pl-4 mt-5'>Your cart is empty</Typography>
                        </Box>
                    </Container>
                </div>
            ) : (
                    <div className=' bg-second w-screen h-fit'>
                        <Container className='flex h-fit'>
                            <Box className='w-4/6 py-10 my-10 rounded-xl bg-white px-10 ml-6 shadow-xl'>
                                <TableContainer component={Paper} >
                                    <Table aria-label="spanning-table">
                                        <TableHead>
                                            <Typography className=' text-3xl font-extrabold pl-4'>Cart</Typography>
                                            <TableRow>
                                                <TableCell className='uppercase'>Product</TableCell>
                                                <TableCell className='uppercase' align="center">Quantity</TableCell>
                                                <TableCell className='uppercase' align="right">Unit Price</TableCell>
                                                <TableCell className='uppercase' align="right">Price</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cartItems.map(item => (
                                                <TableRow className='cart_product_list' key={item.id}>
                                                    <TableCell>
                                                        <Box className=' flex w-full h-40 border-solid border-2 border-second rounded-xl'>
                                                            <img
                                                                className=' w-30 h-24 m-auto'
                                                                alt=''
                                                                src={item.image}
                                                            />
                                                        </Box>
                                                        <Typography className='text-xl '>{item.name}</Typography>
                                                    </TableCell>
                                                    <TableCell align="right" className=' text-lg'>
                                                        <Button
                                                            variant="contained"
                                                            className='min-w-fit min-h-fit bg-gray-300 text-dark shadow-none font-bold mr-2'
                                                            onClick={() => handleRemoveFromCart(item)}>
                                                            -
                                                        </Button>
                                                        {item.quantity}
                                                        <Button
                                                            variant="contained"
                                                            className='min-w-fit min-h-fit bg-gray-300 text-dark shadow-none font-bold ml-2'
                                                            onClick={() => dispatch(increaseItemQuantity(item))}>
                                                            +
                                                        </Button>
                                                    </TableCell>
                                                    <TableCell align="right" className=' text-lg'>${item.price}</TableCell>
                                                    <TableCell align="right"
                                                        className=' text-lg'>${item.price * item.quantity}</TableCell>
                                                </TableRow>
                                            ))}
                                            <TableRow>
                                                <TableCell rowSpan={3} />
                                                <TableCell colSpan={2} className=' text-xl'>Subtotal</TableCell>
                                                <TableCell align="right" className=' text-2xl'>
                                                    ${cartSubTotal}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className=' text-xl' colSpan={2}>Shipping</TableCell>
                                                <TableCell align="right" className=' text-2xl'>${shippingAmount}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={2} className=' text-xl font-extrabold '>Total</TableCell>
                                                <TableCell align="right" className=' text-2xl font-extrabold '>${calculateFinalTotal()}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>


                            <Box className='w-3/6'>
                                <Box className='flex flex-col gap-2 bg-white pt-16 py-10 rounded-xl w-96 ml-10 mt-10 shadow-xl' position={'sticky'}>
                                    <Typography className=' text-3xl w-5/6 mx-auto font-extrabold mb-6'>Order information</Typography>
                                    <TextField sx={style}
                                        variant="outlined" size='small' placeholder='Name' className='w-5/6 mx-auto' />
                                    <TextField sx={style}
                                        variant="outlined" size='small' placeholder='Gmail@gmail.com' className='w-5/6 mx-auto' />
                                    <Box className='flex w-5/6 mx-auto gap-2'>
                                        <TextField sx={style} size='small' placeholder='Street' className='w1/2' />
                                        <TextField sx={style} size='small' placeholder='City Code' className='w1/2 ' />
                                    </Box>
                                    <TextField sx={style}
                                        variant="outlined" size='small' placeholder='City' className='w-5/6 mx-auto' />
                                    <TextField sx={style}
                                        variant="outlined" size='small' placeholder='Country' className='w-5/6 mx-auto text-dark' />
                                    <Button className='w-5/6 mx-auto bg-black rounded-md' size='large'>
                                        <Typography component={'p'} className=' text-md capitalize tracking-widest text-white'>Continue to payment</Typography>
                                    </Button>
                                </Box>
                            </Box>
                        </Container>
                    </div>
                )
            }
        </>
    )
}

export default Cart
