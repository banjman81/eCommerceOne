import React, {useContext} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { ProductsContext } from '../contexts/ProductsContext'
import { Rating } from '@mui/material';

function Home() {

    const {products, dispatch} = useContext(ProductsContext)
    return (
        <div>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                {products ? products.map(product => {
                    return (
                        <div style={{border: '1px solid black', margin: '5px auto', padding: '5px', borderRadius : '3px', width : '20%', height: 'fit-content'}} key={product.id}>
                            <div style={{display:'flex',flexDirection: 'column', justifyContent: 'space-evenly'}}>
                                <div style={{display:'flex', flexDirection: 'row-reverse'}}> 
                                    <FavoriteIcon />
                                </div>
                                <div style={{height: '100px'}}>
                                    <img style={{maxWidth:"95%"}} src={product.image} alt="" height="70%"/>
                                </div>
                                <div style={{height: ''}}>
                                    <h5 style={{height: '50px'}}>{product.title}</h5>
                                    <p style={{color: 'green'}}>${product.price}</p>
                                </div>
                                <Rating style={{margin:'0 auto'}} value={product.rating.rate} readOnly/>
                                <p style={{fontSize: '12px', color: 'rgb(6, 107, 107)'}}>{product.rating.count} Reviews</p>
                                <Button variant="contained" onClick={() => dispatch({type: 'addToCart', payload : product.id})}>Add to cart</Button>
                            </div>
                            
                        </div>
                    )
                }): "Loading..."}
            </div>
        </div>
    )
}

export default Home
