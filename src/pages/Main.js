import React from 'react'
import { getAllData } from '../API'
import { useDispatch} from "react-redux";

const Main = () => {
    const dispatch = useDispatch();
    const action = {
        type: 'ADD_TO_CART',
        payload: {
          product: 'margarine',
          quantity: 4
        }
      }
      dispatch(action)
    return (
        <div>
            hello
        </div>
    )
}

export default Main
