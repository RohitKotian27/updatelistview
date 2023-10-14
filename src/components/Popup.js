export const Popup = ({ handleDelete, id, setShowPopUp }) => {
    function handleDeleteElement() {
        handleDelete(id);
        setShowPopUp(false);
    }
    return (
        <div id="staticModal" data-modal-backdrop="static" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="fixed w-full max-w-2xl h-full top-1/4 left-1/4 align-items-center">
                <div className="bg-white rounded-lg shadow-sm border">
                    <div className="flex items-start justify-between p-4 rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Are you sure you want to delete?
                        </h3>
                        <button onClick={() => setShowPopUp(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="staticModal">
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="flex items-center justify-end p-6 space-x-2 rounded-b">
                        <button onClick={() => setShowPopUp(false)} data-modal-hide="staticModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                        <button onClick={() => handleDeleteElement()} data-modal-hide="staticModal" type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}