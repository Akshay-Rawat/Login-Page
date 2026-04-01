import React, { useState } from 'react'
import "../index.css"

const Text = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = () => {

    if (email === "") {
      alert("Email is required ❌")
    }
    else if (email.includes("@") && email.includes(".")) {
      alert("Valid email ✅")
    }
    else {
      alert("Invalid email ❌")
    }

  }

  return (
    <div id='hi'>
      <div>

        <div className='form'>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div className='form'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form'>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>

    </div>
  )
}
export default Text