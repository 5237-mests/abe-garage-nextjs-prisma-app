import React from 'react'

function Modal({isVisible, onClose, children}:{
  isVisible: boolean,
  onClose: Function,
  children: React.JSX.Element
}) {
  if (!isVisible) return null;
  const handleClose = (event:any) => {
    if (event.target.id === 'wrapper') onClose();
  }
  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center'
      id='wrapper'
      onClick={handleClose}
    >
      <div className='w-[600px] flex flex-col'>
        <div className='bg-red-700 flex flex-col'>
          <button
          className='text-white text-xl place-self-end pr-1'
          onClick={()=>onClose()}
          >X</button>
        </div>
        <div className='bg-white p-2 rounded'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal