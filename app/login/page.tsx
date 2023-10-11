import Link from "next/link"
import prisma from "@/utils/db"

async function login(data:FormData) {
  'use server'
  // console.log('user in', data)
  const email = data.get('email')?.valueOf();
  const password = data.get('password')?.valueOf();

  // const usr = prisma.employee_test.findUnique({
  //   where: {
  //     email: email,
  //   }
  // })
  // console.log('usr tstd',usr.then())
  
}

export default function page() {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-semibold mb-4">Login Page</h1>
      <form action={login} className="max-w-md">
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
          Login
        </button>
      </form>
    </div>
  )
}
