import { Typography } from '@mui/material'
import React from 'react'
const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center text-gray-700 min-h-not_found'>
            <Typography className='text-6xl font-mono'>404</Typography>
            <Typography className='text-xl font-mono'>Page not found</Typography>
        </div>
    )
}

export default NotFound