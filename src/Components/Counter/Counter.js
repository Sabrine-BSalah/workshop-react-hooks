import React, { useState } from 'react'
import './Counter.css'
import { Button } from 'react-bootstrap'
import { useEffect } from 'react';

const Counter = ({ firstName, lastName }) => {

    const [count, setCount] = useState(0);

    const handleClickAdd = () => {
        setCount(count + 1)
    }

    const handleClickMinus = () => {
        count > 0 && setCount(count - 1)
    }

    // didmount & willunmout
    useEffect(() => {
        console.log("component did mount")
        return () => {
            console.log("component will unmout")
        }
    }, []);

    // didupdate
    useEffect(() => {
        console.log("component did update")
    });


    return (
        <div className="counterPart">
            <hr />
            <h2>{`Hello ${firstName} ${lastName}`}</h2>
            <div className="counterContent">

                <Button variant="success"
                    onClick={handleClickAdd}
                    className="addMinusBtn">+</Button>
                <h3>{count}</h3>
                <Button variant="success"
                    onClick={handleClickMinus}
                    className="addMinusBtn">-</Button>
            </div>

        </div>
    )
}

export default Counter