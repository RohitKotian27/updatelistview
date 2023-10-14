export const SearchBar = ({ taskList, setFilterList, searchValue, setSearchValue }) => {
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        const updatedList = taskList.filter((elem) => `${elem.first} ${elem.last}`.includes(searchValue));
        setFilterList(updatedList);
        setSearchValue(searchValue);
    }

    return (
        <form className="max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <h1 className="my-3 text-xl">List View</h1>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input value={searchValue} type="search" onChange={handleSearch} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search user" />
            </div>
        </form>
    )
}   