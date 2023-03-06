import React from 'react';
import ChatsCircle from '../../Assets/ChatsCircle.svg'

function NeedHelpBox() {
    return (
        <div className="sm:max-w-auto sm:max-h-fit md:max-w-[360px] md:max-h-fit bg-[#FFF7ED] grid grid-cols-4 gap-3 text-[#7F2D0F] justify-between rounded-xl">
            <div className='col-span-3 grid grid-row-2 mx-6 py-4  gap-3'>
                <div className='flex flex-col'>
                    <div className='text-lg font-semibold'>Need help?</div>
                    <div className='text-base font-normal'>We are here to help, 24*7</div>
                </div>
                <div className=''>
                    <button className=" text-base font-semibold hover:bg-[#dba895] border border-[#7F2D0F] rounded-xl font-bold py-2 px-6 ">
                        Chat with us
                    </button>
                </div>
            </div>
            <div className='col-span-1 my-8'>
                <img src={ChatsCircle} alt='icon' />
            </div>
        </div>
    )
}

export default NeedHelpBox