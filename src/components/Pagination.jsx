import React from 'react'

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className='flex gap-2 mt-4'>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
            >
                Prev
            </button>
            <span className="self-center">{currentPage}/{totalPages}</span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
            >
                Next
            </button>
        </div>
    )
}

export default Pagination