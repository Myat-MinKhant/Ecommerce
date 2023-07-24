import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, Card, Checkbox, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../redux/functions/productsApi'
import { addToCart } from '../redux/functions/cartSlice'
import { addToWishList } from '../redux/functions/wishListSlice'
import { productDetailShow } from '../redux/functions/productDetailSlice'

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [foundProduct, setFoundProduct] = useState([])
    const { products } = useSelector(state => state.products);
    const { wishListItems } = useSelector(state => state.wishListItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    function handleChange(value) {
        setInputValue(value);
        const results = products.filter(product => {
            return value && product && product.name && product.name.toLowerCase().includes(value.toLowerCase());

        });
        setFoundProduct(results);
    }

    return (
        <div className='w-screen h-fit'>
            <Container className=' px-14'>
                <TextField fullWidth autoComplete='off' className='mt-10' size='small' placeholder='Search Product...' inputProps={{ style: { fontSize: 25, marginLeft: 20 } }} value={inputValue} onChange={(e) => handleChange(e.target.value)} />
                <Box className='flex flex-wrap w-full mt-10 pb-5'>
                    {foundProduct.map(product => (
                        <Box className=' mb-10'>
                            <Card className=' w-48 h-48 rounded-xl bg-transparent '>
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
                                <Typography className=' text-sm font-semibold'>
                                    {product.name}
                                </Typography>
                                <Box className='mt-1 flex items-center h-15'>
                                    <Typography
                                        component='h2'
                                        className=' text-lg font-extrabold mr-5'>
                                        ${product.price}
                                    </Typography>
                                    <Button className=' text-green-900 border-solid border-2 text-md font-bold w-30 h-5 capitalize p-4 mr-4'
                                        onClick={() => dispatch(addToCart(product))}>
                                        Add to cart
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </div>
    )
}

export default Search