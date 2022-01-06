import './App.css';
import React, { useState } from 'react';

function App() {
  const [inter, setInter] = useState("");
  const [data, showData] = useState("");

  const click = (event) => {
    setInter(inter.concat(event.target.value)); 
  }

  const clear= () => {
   setInter("");
  }
  const equal = () => {
    setInter(eval(inter));
  }
  return (
   <>
   <div className="container">
     <div className="center">
     <i class="fa fa-microphone" aria-hidden="true"></i>
       <br />
       <br />
    <input type="text/number" placeholder='0' value={inter} className='small-one' />
     <input type="number" className='Entry_Input'/>

    <div className="buttons">

     <input type="button"  onClick={clear} className="grey" value={'C'} />
     <input type="button"  onClick={click}  className="grey" value={'+/-'} />
     <input type="button"  onClick={click} className="grey" value={'%'} />
     <input type="button"  onClick={click} className='orange' value={'/'} />
     <input type="button"  onClick={click} className='white' value={7} />
     <input type="button"  onClick={click} className='white' value={8} />
     <input type="button"  onClick={click} className='white' value={9} />
     <input type="button"  onClick={click} className='orange' label='x' value={'*'}/>
     <input type="button"  onClick={click} className='white' value={4} />
     <input type="button"  onClick={click} className='white' value={5} />
     <input type="button"  onClick={click} className='white' value={6} />
     <input type="button"  onClick={click} className='orange' value={'-'} />
     <input type="button"  onClick={click} className='white' value={1} />
     <input type="button"  onClick={click} className='white' value={2} />
     <input type="button"  onClick={click} className='white' value={3} />
     <input type="button"  onClick={click} className='orange' value={'+'} />
     <input type="button"  onClick={click} id='big_zero' className='white' value={0} />
     <input type="button"  onClick={click} className='white' value={'.'} />
     <input type="button"  onClick={equal} className='orange' value={'='} />
    </div>
   
      </div>
   </div>
   </>
  );
}

export default App;
