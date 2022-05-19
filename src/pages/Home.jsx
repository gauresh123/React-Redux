import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { chkbal, usnm } from '../store/userSlice';


function Home() {
   const[flag ,setflag]=useState(false);
   const[see,setsee]=useState(false);
  
   const[data,setdata]=useState("");
   const[amt,setamt]=useState("");
   const dispatch = useDispatch();
   const info = useSelector((state)=> state.user.nm )
   const foo = useSelector((state)=> state.user.balance)
   const abc = ()=>{
     setflag(true);
     dispatch(usnm(data))
   }
   const change = (e)=>{
     setdata(e.target.value);
   }
   const money = ()=>{
     setsee(true);
     dispatch(chkbal(foo - amt));
   }
   const amtchng = (e)=>{
     setamt(parseInt( e.target.value));
   }
  return (
    <div>
      <TextField id="outlined-basic" label="Enter User Name" variant="outlined" margin='normal' sx={{}} onChange={change}/>
      <Button margin="normal"  variant='contained' sx={{marginTop:"20px",marginLeft:"10px"}} onClick={abc}>Check Balance</Button>
     {  flag ?<><h2>{info}</h2> <h3>Amount Balance : {foo}</h3>   <Button variant="contained" margin="normal" onClick={money}>Withdraw Money</Button>
</>:null
  }&nbsp;
  {
    see?<TextField id="outlined-basic" label="Enter Amount" variant="outlined" sx={{marginBottom:"12px"}}  onChange={amtchng}/>:null
  }

    </div>
  )  
}

export default Home;
