import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';




function App() {
  //states to hold values from input field
  const[height,setHeight] = useState(0)
  const[weight,setWeight] = useState(0)
  const[bmi,setBmi] = useState('BMI')
  const[info,setInfo] = useState('Category')


    /*for conditional rendering */
    const[isHeight, setIsHeight] = useState(true)
    const[isWeight, setIsWeight] = useState(true)


  const validate=(e)=>{
    /*console.log(e.target.value);
    console.log(e.target.name);*/

    let name = e.target.name 
    let value = e.target.value
    console.log(!!value.match(/^[0-9]*$/));

   if(!!value.match(/^[0-9.]*$/)){
    if(name=='height'){
      setHeight(value)
      setIsHeight(true)
    }
    else{
      setWeight(value)
      setIsWeight(true)
    
     }
    
   }
   else{
    if(name=='height'){
     /* setHeight(value)*/
      setIsHeight(false)
    }
    else{
      /*setWeight(value)*/
      setIsWeight(false)
    
     }

   }

  }

  const handleReset= ()=>{
    setHeight(0)
    setWeight(0)
    setIsHeight(true)
    setIsWeight(true)
    setBmi('BMI')
    setInfo('Category')
  }

  const calculate= ()=>{

    var bodymassindex = ((weight/(height*height))*10000).toFixed(2)
    setBmi(bodymassindex)
    if(bodymassindex<'18.5'){
      setInfo('Underweight')


    }
    else if(bodymassindex>='18.5' && bodymassindex<='24.9'){
      setInfo('Normal Weight')

    }
    else if(bodymassindex>='25' && bodymassindex<='29.9'){
      setInfo('Overweight')


    }
    else if(bodymassindex>'30'){
      setInfo('Obese')


    
    }
  }

   /* console.log('height', height);
  console.log('weight', weight);*/


 
   return (
   
    <div className='row bg-secondary' style={{width:'1550px'}}>
      <div className="col-md-6 bg-secondary">
        
        <h1 className='fnt'><span className='text-danger'>B</span>ODY</h1>
        <h1 className='fnt'><span className='text-danger'>MA</span>SS</h1>
        <h1 className='fnt'><span className='text-danger'>IND</span>EX</h1>
        

      </div>
      <div className="col-md-6  bg-dark">
        <div className="row rr">
          <div className="col-md-2"></div>
          <div className="col-md-6 ms-md-4   mt-md-5 pt-md-5 ps-md-4 ">
          <div className='bg-light p-5 rounded shadow border border-dark' style={{width:'450px'}}>
        <h1 className='text-dark'>BMI Calculator</h1>

        <div className='disp mt-5 flex-column rounded shadow bg-dark d-flex justify-content-center  align-items-center p-2'>
          <h2 className='text-light'>{bmi}</h2>
         <p className='text-light'>{info}</p>

        </div>


        <form className='mt-3'>
       <div className="mb-3">
       <TextField value={height || ""}  className='w-100 border border-dark rounded mt-2' id="filled-basic" name='height' label="Height(cm)" variant="filled" onChange={(e)=>validate(e)}/>
       {!isHeight && 
          <p className='text-danger'>*Invalid Input</p>}

       

       </div>
       <div className="mb-3">
       <TextField value={weight || ""}  className='w-100 border border-dark rounded' id="filled-basic" name='weight' label="Weight(Kg)" variant="filled" onChange={(e)=>validate(e)}/>
       {!isWeight && 
          <p className='text-danger'>*Invalid Input</p>}


       </div>
       <div className="d-flex justify-content-between w-100 mt-4">
       <Button  className='text-secondary border border-secondary' style={{width:'170px',height:'50px'}} disabled={isHeight && isWeight ? false:true}  variant="outlined" onClick={calculate}>Calculate</Button>
       <Button className='text-secondary border border-secondary' style={{width:'170px',height:'50px'}}   variant="outlined" onClick={handleReset}>Reset</Button>
       </div>
       </form>

       


       

  


    </div>
          </div>
          <div className="col-md-2"></div>
        </div>
       

        

      </div> 
      </div>

   


 
 
  )

 
}   


export default App
