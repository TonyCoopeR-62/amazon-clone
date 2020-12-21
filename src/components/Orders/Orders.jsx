import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import './ordersStyles.css'
import Order from './Order/Order'

const Orders = ({ userData }) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (userData) {
      db
        .collection('users')
        .doc(userData?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          })))
        ))
    } else {
      setOrders([])
    }
  }, [userData])

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </div>
  )
}

export default Orders
