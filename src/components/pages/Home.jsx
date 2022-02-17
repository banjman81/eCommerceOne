import React, {useContext} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { ProductsContext } from '../contexts/ProductsContext'

function Home() {

    const {products, addToCart} = useContext(ProductsContext)
    return (
        <div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                {products ? products.map(product => {
                    return (
                        <div style={{border: '1px solid black', margin: '5px auto', padding: '5px', borderRadius : '3px', width : '20%', height: '300px'}} key={product.id}>
                            <div style={{display:'flex',flexDirection: 'column', justifyContent: 'space-evenly'}}>
                                <div style={{display:'flex', flexDirection: 'row-reverse'}}> 
                                    <FavoriteIcon />
                                </div>
                                <div style={{height: '100px'}}>
                                    <img style={{paddingTop: '25px', maxWidth:"95%"}} src={product.image} alt="" height="70%"/>
                                </div>
                                <div>
                                    <h5 style={{height: '50px'}}>{product.title}</h5>
                                    <p style={{color: 'green'}}>${product.price}</p>
                                </div>
                                <Button variant="contained" onClick={() => addToCart(product.id)}>Add to cart</Button>
                            </div>
                            
                        </div>
                    )
                }): "Loading..."}
            </div>
        </div>
    )
}

export default Home
