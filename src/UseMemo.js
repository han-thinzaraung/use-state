import React, { useMemo, useState } from 'react'


export default function UseMemo() {
    let [count1,setCount1] = useState(0);
    let [count2,setCount2] = useState(0);
    const changeCount1 = ()=>{
        setCount1(prev => prev+1)
    }
    const changeCount2 = ()=>{
        setCount1(prev => prev+1)
    }
    let isEven = useMemo(() => {
        let i =0;
        while (i <= 5000000) i++;
        return count1 % 2 === 0

    } , [count1]);
  return (
   <>
   <h3> Count 1 is {count1} {isEven ? "Even" : "Odd"}  </h3>
   <button onClick = {changeCount1}>Change Count 1</button>
   <h3> Count 2 is {count2}</h3>
   <button onClick = {changeCount2}>Change Count 2</button>

   </>
  )
}
