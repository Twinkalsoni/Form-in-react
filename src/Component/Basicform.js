import React,{useState} from 'react'

const Basicform = () => {
  const [email,setEmail]= useState(" ");
  const [password,setPassword]= useState(" ");

  const[allEntry, setAllEntry]= useState([]);

  const submitForm =(e) =>{
    e.preventDefault();
    const newEntry = {email:email, password:password};
    setAllEntry([...allEntry,newEntry]);
    console.log(allEntry);

  }

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" autoComplete="off" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" autoComplete="off" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button>Login</button>
      </form>

      <div className='map'>
        {
          allEntry.map((curElem)=>{
            return(
              <div className='showDataStyles'>
                <p >{curElem.email}</p>
                <p>{curElem.password}</p>
                <br/>
                </div>
            )
          })
        }
      </div>
      </>
  )
}

export default Basicform