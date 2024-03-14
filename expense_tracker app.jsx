import React, { useEffect, useState } from 'react'
import '../App.css'
import cow from '../img/cow.jpg'

function Index() {
    const [expense, setexpense] = useState('')
    const [amount, setamount] = useState('')
    const [array, setarray] = useState([])

    const onhandle = (e) => {
        e.preventDefault()
        var obj = {}
        obj.expense = expense;
        obj.amount = Number(amount);

        const updateuser = [...array, obj]
        console.log("user", updateuser)
        setarray(updateuser)

    }

    const remove = (index) => {
        const updatedArray = [...array];
        updatedArray.splice(index, 1);
        setarray(updatedArray);
    }

    useEffect(() => {
        console.log("array", array);
    }, [array])


    return (
        <div>
            <h1>EXPENSE TRACKER</h1>
            <div className='container'>
                <div className='container1'>
                    <form onSubmit={onhandle}>
                        <input type="text" value={expense} onChange={(e) => setexpense(e.target.value)} id="expense" placeholder='Enter Expense Name' /><br></br>
                        <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} id="amount" placeholder='Enter Expense Amount' /><br></br>
                        <button type="submit">ADD EXPENSE</button>
                    </form>
                </div>
            </div>
            <div className='container2'>
                <div className='container3'>
                    {array.map((element, index) => {
                        return (
                            <>
                                <div className='container4'>
                                    <div className='vk18'>
                                        <p>EXPENSE NAME : {element.expense}</p>
                                        <p>AMOUNT : {element.amount}</p>
                                        <button onClick={() => remove(index)}>REMOVE</button>

                                    </div>
                                    <div className='hello' style={{ backgroundColor: element.amount >= 0 ? 'green' : 'red' }}>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Index
