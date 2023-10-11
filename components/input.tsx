import React from 'react'
import Link from 'next/link'
import prisma from '@/utils/db';
import { redirect } from 'next/navigation';

async function createTodo(data:FormData) {
  'use server'
  const title = data.get('title')?.valueOf();
  if(typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid Title');
  }

  await prisma.employee_test.create({data: {title, complete: false}})
  redirect('/')
}

function Page() {
  return (
    <div>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>NEW</h1>
      </header>
      <form action={createTodo} className="form-control">
        <input
         type="text"
         name='title'
         className='input input-bordered text-slate-800 my-3 py-1'
         placeholder='Enter Title'
        />
        <div className='flex gap-1 justify-end'>
          <Link href='...' className='btn btn-warning'>
            Cancel
          </Link>
          <button className='btn btn-accent'>
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page
