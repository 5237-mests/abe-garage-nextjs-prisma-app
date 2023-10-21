'use client'
import { useState } from "react";
import Link from "next/link";
import Modal from "@/components/Modal";

export default function Page() {
  const [employee, setEmployee] = useState([]);
  const [showModal3, setShowModal3] = useState(false)
  const [status, setStatus] = useState('')

  async function addEmployee(data:FormData) {
    const firtName = data.get('firstName')?.valueOf();
    const lastName = data.get('lastName')?.valueOf();
    const email = data.get('email')?.valueOf();
    const password = data.get('password')?.valueOf();

    
    try {
      await fetch('/api/addemployee', {
        method: 'POST',
        body: JSON.stringify({firtName, lastName, email, password})
      })
    } catch (error) {
      console.log(error)
    }
    setStatus('Successfully added!')
    await getemployee()

    setTimeout(()=>{
      setStatus('')
    }, 3000)
    return
  }

  async function getemployee() {
    await fetch('/api/addemployee')
            .then(data=>data)
            .then(data=>data.json())
            .then(data=>setEmployee(data.employee))
            .catch(error=>console.log(error));
  }

  const [em, setEm] = useState('')
  const updateButton = (x: any) => {
    setShowModal3(true)
    setEm(x)
  }

  async function updateployee(data:FormData) {
    const firtName = data.get('firstNameu')?.valueOf();
    const lastName = data.get('lastNameu')?.valueOf();
    const email = data.get('emailu')?.valueOf();
    const password = data.get('passwordu')?.valueOf();

    try {
      await fetch('/api/addemployee', {
        method: 'PUT',
        body: JSON.stringify({firtName, lastName, email, password})
      })
    } catch (error) {
      console.log(error);
    }
    await getemployee()
    return
  }

  async function deletemployee(email:String) {
    await fetch('/api/addemployee', {
      method: 'DELETE',
      body: JSON.stringify({email})
    })
    await getemployee()
    return
  }

  return (
    <div className="container mx-auto p-4 ">
      <div>
        <button type="button" className="btn btn-accent m-1">
          <Link href='/'>
             Back
          </Link>
        </button>
      </div>
      <h1 className="text-2xl font-semibold mb-4">Add Employee</h1>
      <form action={addEmployee} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-600 mb-2">
            First Name
          </label>
          <input
            required
            type="text"
            id="firstName"
            name="firstName"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-600 mb-2">
            Last Name
          </label>
          <input
            required
            type="text"
            id="lastName"
            name="lastName"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password
          </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          onClick={()=>setStatus('Sending data... wait')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Employee
        </button>
        <div className="bg-green-300">
          {status }
        </div>
      </form>
      <div>
        <br/>
        <button
          onClick={getemployee}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Get all Employee
        </button>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employee?.map((empl, id)=>(
                <tr key={id} className="hover">
                   <th>{id + 1}</th>
                   <td>{empl['firtName']}</td>
                   <td>{empl['lastName']}</td>
                   <td>{empl['email']}</td>
                   <td>{empl['password']}</td>
                   <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={()=>updateButton(empl['email'])}
                    >
                      Update
                    </button>
                    <Modal isVisible={showModal3} onClose={()=>setShowModal3(false)}>
                      <div className="p-5">
                        <form action={updateployee} className="max-w-md">
                          <div className="mb-4">
                            <label htmlFor="firstNameu" className="block text-gray-600 mb-2">
                              First Name
                            </label>
                            <input
                              required
                              type="text"
                              id="firstNameu"
                              name="firstNameu"
                              className="w-full p-2 border border-gray-300 rounded"
                            />
                          </div>

                          <div className="mb-4">
                            <label htmlFor="lastNameu" className="block text-gray-600 mb-2">
                              Last Name
                            </label>
                            <input
                              required
                              type="text"
                              id="lastNameu"
                              name="lastNameu"
                              className="w-full p-2 border border-gray-300 rounded"
                            />
                          </div>

                          <div className="mb-4">
                            <label htmlFor="emailu" className="block text-gray-600 mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              value={em}
                              id="emailu"
                              name="emailu"
                              className="w-full p-2 border border-gray-300 rounded"
                            />
                          </div>

                          <div className="mb-4">
                            <label htmlFor="passwordu" className="block text-gray-600 mb-2">
                              Password
                            </label>
                            <input
                              required
                              type="password"
                              id="passwordu"
                              name="passwordu"
                              className="w-full p-2 border border-gray-300 rounded"
                            />
                          </div>

                          <button
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                          >
                            Update
                          </button>
                        
                        </form>
                      </div>
                    </Modal>
                   </td>
                   <td>
                    <button
                     type="button"
                     className="btn btn-error"
                     onClick={()=>deletemployee(empl['email'])}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
             
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
