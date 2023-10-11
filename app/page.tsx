'use client'
import Link from "next/link";


export default  function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button type="button" className="btn btn-error my-4 hover:bg-green-300">
        <Link href='/addemployee'>Add Employee</Link>
      </button>
    </div>
  )
}
