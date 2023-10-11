'use client'
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [employee, setEmployee] = useState([]);

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
  }

  async function getemployee() {
    await fetch('/api/addemployee')
            .then(data=>data)
            .then(data=>data.json())
            .then(data=>setEmployee(data.employee))
            .catch(error=>console.log(error));
  }

  async function updateployee() {
    await fetch('/api/addemployee', {
      method: 'PUT'
    })
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
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Employee
        </button>
        
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
                      // onClick={()=>document.getElementById('my_modal_1')?.showModal()}
                    >
                      Update
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-actionn">
                          <form method="dialogg" action={updateployee}>
                            <div className="mb-4">
                              <label htmlFor="firtName" className="block text-gray-600 mb-2">
                                First Name
                              </label>
                              <input
                                type="text"
                                value={empl['firstName']}
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
                                type="text"
                                value={empl['lastName']}
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
                                type="email"
                                value={empl['email']}
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
                                type="password"
                                value={empl['password']}
                                id="password"
                                name="password"
                                className="w-full p-2 border border-gray-300 rounded"
                              />
                            </div>

                            {/* <div className="btn btn-warning">update</div> */}
                            <button className="btn btn-warning">Update</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
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
