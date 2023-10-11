'use client'

import { error } from "console"

export default  function Home() {


  const makeAcall = async () => {
    await fetch('api/hello', {
      method: 'POST',
      body: JSON.stringify({hello1: 'alen api call'})
    })
     .then(data => data.json())
     .then(data => console.log(data))
     .catch(error=>console.log(error));
  }

  const makeAcall2 = async () => {
    await fetch('api/hello', {
      method: 'GET'
    })
     .then(data => data.json())
     .then(data => console.log(data))
     .catch(error=>console.log(error));
  }

  return (
    <div>
      <h1>hello home page</h1>
      <button type="button" className="btn btn-accent" onClick={makeAcall2}>call api</button>
    </div>
  )
}
