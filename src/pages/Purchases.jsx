import React, { useEffect } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPurchasesThunk } from '../slices/purchase.slice'

const Purchases = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const purchases = useSelector(state => state.purchase)

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])

    const nowDate = (info) => {
        const dateActual = new Date(info);
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        return dateActual.toLocaleDateString('en-us', options)
    }


    return (
        <div>
            <h1 className='titlePurchase'>Your Purchase History</h1>
            {
                purchases.map(buy => (
                    <Card key={buy.id}>
                        <Card.Header className='card-bodyColor'><b>Purchase made:</b> <i>{nowDate(buy.createdAt)}</i></Card.Header>
                        <Card.Body>
                            <h5>Details of purchase</h5>
                            {
                                buy.cart.products.map(item => (
                                    <blockquote className="blockquote mb-0" key={item.id}>
                                        <p onClick={() => navigate(`/products/${item.id}`)}><span>Product: </span> {item.title} <span>Total Paid:</span> $ {item.price}</p>
                                    </blockquote>
                                ))
                            }
                        </Card.Body>
                        {/* <ListGroup>
                            {purchases.map(p => (
                                <ListGroup.Item key={p.id}  >
                                    <div className='xDiv' >
                                        <h2></h2>
                                    </div>
                                    {p.cart.products.map(item => (
                                        <div key={item.id} >
                                            <hr />
                                            <h5>Details of purchase</h5>
                                            <p onClick={() => navigate(`/products/${item.id}`)}> <b>Product:</b> {item.title}</p>
                                            <p><b>Price:</b>{item.price}</p>
                                        </div>
                                    ))}
                                </ListGroup.Item>
                            ))
                            }
                        </ListGroup> */}
                    </Card>
                ))
            }
        </div>
    )
}


export default Purchases