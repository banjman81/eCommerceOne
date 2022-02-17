import React, {useContext} from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../navbar.css'

function Cart() {
    const {cart, setCart} = useContext(ProductsContext)
    return (
        <div>
            <div>
                { cart ? cart.map(item => {
                    return (
                        <div key={item.id} style={{display: 'flex', justifyContent: 'space-evenly', border: '1px solid black', margin: '5px auto', width: '80%'}}>
                            <img src={item.image} alt="" width="50px"/>
                            <div style={{width: '50%'}}>
                                <h5>{item.title}</h5>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-evenly', width: '20%', textAlign: 'center'}}>
                                <p className="cart-p">{item.price}</p>
                                <p className="cart-p">{item.count}x</p>
                                <Button>
                                    <DeleteForeverIcon color='error' />
                                </Button>
                            </div>
                        </div>
                    )
                }): 'Empty Cart'}
            </div>
            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'space-evenly', width: '250px', height: '150px', margin: '10px auto'}}>
                <Button color='error' variant="outlined" startIcon={<DeleteForeverIcon />} onClick={() => setCart([])}>Empty Cart</Button>
                <Link to='/' style={{textDecoration: 'none', width: '100%'}}>
                    <Button variant="outlined">Continue Shopping</Button>
                </Link>
                <Button variant="outlined">Checkout</Button>
            </div>
        </div>
    )
}

export default Cart
