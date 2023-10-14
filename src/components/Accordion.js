import { useState, useRef } from "react";
import { Popup } from "./Popup";
import dayjs from "dayjs";

export const Accordion = ({ data, handleDelete, taskList, setTaskList, openAccordion, handleAccordion, disableButton, setDisableButton, setFilterList, setSearchValue }) => {
    const inputName = useRef();
    const inputAge = useRef();
    const inputGender = useRef();
    const inputCountry = useRef();
    const inputDescription = useRef();
    const currentDate = dayjs().format('YYYY-MM-DD');
    const dateNow = dayjs(currentDate);
    const dateOfBirth = dayjs(data.dob);
    const age = isNaN(data.dob) ? dateNow.diff(dateOfBirth, 'year') : data.dob;
    const [showPopUp, setShowPopUp] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    function handleEdit() {
        const updatedFirstName = inputName.current.value.split(' ')[0];
        const updatedLastName = inputName.current.value.split(' ')[1];
        const updatedAge = inputAge.current.value.match(/\d+/).toString();
        const updatedGender = inputGender.current.value;
        const updatedCountry = inputCountry.current.value;
        const updatedDescription = inputDescription.current.value;
        const updatedList = taskList.map((item) => (
            item.id === data.id ? { ...item, first: updatedFirstName, last: updatedLastName, dob: updatedAge, gender: updatedGender, country: updatedCountry, description: updatedDescription } : item
        ));
        setTaskList(updatedList);
        setFilterList(updatedList);
        setShowEdit(!showEdit);
        setDisableButton(!disableButton);
        setSearchValue('');
    }

    return (
        <div id="accordion-collapse" className="max-w-lg mx-auto rounded-md border my-3" data-accordion="collapse">
            <h2 id="accordion-flush-heading-1">
                <button type="button" onClick={() => handleAccordion(data.id)} className="text-lg flex items-center justify-between w-full p-4 my-1 font-medium text-left text-gray-500" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1" {...(disableButton ? { disabled: true } : {})} >
                    <div className="flex items-center ">
                        <span className="px-3">
                            <img src={data.picture} alt="Profile" className="rounded-full" />
                        </span>
                        {showEdit ? <input ref={inputName} className="border border-gray-300 rounded-md p-1 w-full" type="text" defaultValue={`${data.first} ${data.last}`} /> : <span className="text-xl text-slate-900">{data.first} {data.last}</span>}
                    </div>
                    {openAccordion === data.id ? (<svg data-accordion-icon className="rotate-180 w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>) : (<svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>)}
                </button>
            </h2>
            <div id="accordion-flush-body-1" className={openAccordion === data.id ? '' : 'hidden'} aria-labelledby="accordion-flush-heading-1">
                <div className="p-4 border-b border-gray-200 text-md text-gray-500">
                    <div className="flex justify-between mb-1">
                        <div className="mb-2 mx-2 w-1/3">
                            <p className="mb-1">Age</p>
                            {showEdit ? <input ref={inputAge} className="border border-gray-300 rounded-md p-1 w-full" type="number" defaultValue={`${age}`} /> : <p>{age} years</p>}
                        </div>
                        <div className="mb-2 mx-2 w-1/3">
                            <p className="mb-1">Gender</p>
                            {showEdit ? <select ref={inputGender} className="border border-gray-300 rounded-md p-1 w-full" defaultValue={data.gender}>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="transgender">transgender</option>
                                <option value="rather not say">rather not say</option>
                                <option value="other">other</option>
                            </select> : <p>{data.gender}</p>}

                        </div>
                        <div className="mb-2 mx-2 w-1/3">
                            <p className="mb-1">Country</p>
                            {showEdit ? <input ref={inputCountry} className="border border-gray-300 rounded-md p-1 w-full" type="text" id="country" defaultValue={data.country} /> : <p>{data.country}</p>}
                        </div>
                    </div>
                    <div className="mx-2 mb-2">
                        <p className="mb-1">Description</p>
                        {showEdit ? <textarea ref={inputDescription} className="border border-gray-300 rounded-md p-1 w-full" type="text" id="description" defaultValue={data.description} /> : <p>{data.description}</p>}
                    </div>
                    <div className="text-right">
                        {showEdit ? <div id="editButtons">
                            <i className="bi bi-x-circle px-1 cursor-pointer text-lg text-red-500" onClick={() => {
                                setShowEdit(!showEdit);
                                setDisableButton(!disableButton);
                            }}></i>
                            <i className="bi bi-check-circle px-1 cursor-pointer text-lg text-green-500" onClick={handleEdit}></i>
                        </div> : <div id="defaultButtons">
                            <i className="bi bi-trash3-fill px-1 cursor-pointer text-lg text-red-500" onClick={() => setShowPopUp(!showPopUp)}></i>
                            {age >= 18 && <i className="bi bi-pencil-square px-1 cursor-pointer text-lg text-blue-500" onClick={() => {
                                setShowEdit(!showEdit);
                                setDisableButton(!disableButton);
                            }}></i>}
                        </div>}
                    </div>
                </div>
            </div>
            {showPopUp && <Popup handleDelete={handleDelete} id={data.id} setShowPopUp={setShowPopUp} />}
        </div>
    )
}