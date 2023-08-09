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
        <div className=' overflow-x-hidden'>
            {cartItems.length === 0 ? (
                <div className=' bg-second w-screen h-cart'>
                    <Container className='flex'>
                        <Box className='w-full laptop:w-1/2 h-48 pt-10 mt-5 pl-5 tablet:py-10 tablet:mt-10 rounded-xl bg-white tablet:px-10 tablet:ml-6 shadow-xl'>
                            <Typography className=' text-3xl font-bold pl-4'>Cart</Typography>
                            <Typography className=' text-xl pl-4 mt-5'>Your cart is empty</Typography>
                        </Box>
                    </Container>
                </div>
            ) : (
                <div className=' bg-second w-screen h-fit'>
                    <Container className='laptop:flex h-fit py-10 laptop:pl-12'>
                        <Box className='laptop:w-[550px] desktop:px-10 pt-10 mb-10 rounded-xl bg-white laptop:ml-6 shadow-xl'>
                            <TableContainer component={Paper} className=' mobile:hidden tablet:block'>
                                <Table aria-label="spanning-table">
                                    <TableHead>
                                        <Typography className='font-main text-3xl font-extrabold laptop:my-7 pl-4'>Cart</Typography>
                                        <TableRow>
                                            <TableCell className='uppercase'>Product</TableCell>
                                            <TableCell className='uppercase col-span-1' align="center">Quantity</TableCell>
                                            <TableCell className='uppercase col-span-1' align="right">Unit Price</TableCell>
                                            <TableCell className='uppercase' align="right">Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cartItems.map(item => (
                                            <TableRow className='cart_product_list align-middle ' key={item.id}>
                                                <TableCell>
                                                    <Box className=' flex w-full h-40 border-solid border-2 border-second rounded-xl'>
                                                        <img
                                                            className=' w-30 h-24 m-auto'
                                                            alt=''
                                                            src={item.image}
                                                        />
                                                    </Box>
                                                    <Typography className='text-xl font-main'>{item.name}</Typography>
                                                </TableCell>
                                                <TableCell align="right" className=' text-lg px-0 laptop:pb-20'>
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
                                                <TableCell align="right" className=' text-lg font-main laptop:pb-20'>${item.price}</TableCell>
                                                <TableCell align="right"
                                                    className=' text-lg font-main laptop:pb-20'>${item.price * item.quantity}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow>
                                            <TableCell rowSpan={3} />
                                            <TableCell align='right' colSpan={2} className=' text-xl'>Subtotal</TableCell>
                                            <TableCell align="right" className=' text-2xl'>
                                                ${cartSubTotal}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='right' colSpan={2} className=' text-xl col-span-2'>Shipping</TableCell>
                                            <TableCell align="right" className=' text-2xl'>${shippingAmount}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='right' colSpan={2} className=' text-xl font-extrabold col-span-2'>Total</TableCell>
                                            <TableCell align="right" className=' text-2xl font-extrabold '>${calculateFinalTotal()}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <TableContainer component={Paper} className=" tablet:hidden overflow-hidden">
                                <Table aria-label="spanning-table">
                                    <TableHead>
                                        <Typography className='font-main text-3xl font-extrabold pl-4'>Cart</Typography>
                                        <TableRow>
                                            <TableCell className='uppercase col-span-1'>Product</TableCell>
                                            <TableCell className='uppercase col-span-1' align="right">Quantity&Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cartItems.map(item => (
                                            <TableRow className='cart_product_list' key={item.id}>
                                                <TableCell>
                                                    <Box className=' flex w-full h-34 border-solid border-2 border-second rounded-xl'>
                                                        <img
                                                            className=' w-30 h-24 m-auto py-4 px-1'
                                                            alt=''
                                                            src={item.image}
                                                        />
                                                    </Box>
                                                    <Typography className='text-lg font-main'>{item.name}</Typography>
                                                </TableCell>
                                                <TableCell align="right" className=' text-lg flex flex-col items-end h-52 justify-around mr-3'>
                                                    <Box>
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
                                                    </Box>

                                                    <Typography className=' text-2xl font-main'>
                                                        ${item.price * item.quantity}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow>
                                            <TableCell align='right' className=' text-xl'>Subtotal</TableCell>
                                            <TableCell align="right" className=' text-2xl pr-7'>
                                                ${cartSubTotal}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='right' className=' text-xl'>Shipping</TableCell>
                                            <TableCell align="right" className=' text-2xl pr-7'>${shippingAmount}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align='right' className=' text-xl font-extrabold'>Total</TableCell>
                                            <TableCell align="right" className=' text-2xl font-extrabold pr-7'>${calculateFinalTotal()}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>


                        <Box className='laptop:w-2/6 desktop:ml-5'>
                            <Box className='flex flex-col gap-2 bg-white pt-16 rounded-xl laptop:w-[360px] desktop:w-96 pb-10 laptop:ml-5 mt-10 laptop:mt-0 shadow-xl' position={'sticky'}>
                                <Typography className=' text-3xl w-5/6 mx-auto font-extrabold mb-6'>Order information</Typography>
                                <TextField sx={style}
                                    variant="outlined" size='small' placeholder='Name' className='w-5/6 mx-auto' />
                                <TextField sx={style}
                                    variant="outlined" size='small' placeholder='Gmail@gmail.com' className='w-5/6 mx-auto' />
                                <Box className='flex w-5/6 mx-auto gap-2'>
                                    <TextField sx={style} size='small' placeholder='Street' className=' laptop:w1/2 w-full' />
                                    <TextField sx={style} size='small' placeholder='City Code' className=' laptop:w1/2 w-full' />
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
        </div>
    )
}

export default Cart
