import React from 'react'
import { getAllData } from '../API'
import { useDispatch} from "react-redux";

const Main = () => {
    const dispatch = useDispatch();
    const action = {
        type: 'updateCountryData',
        payload: {
          test:'test'
        }
      }
      dispatch(action)
      dispatch(action)
    return (
        <div>
            hello
        </div>
    )
}

export default Main
