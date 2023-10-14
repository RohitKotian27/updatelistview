import { useState } from "react";
import { Accordion } from './Accordion';

export const ShowList = ({ taskList, setTaskList, filterList, setFilterList, setSearchValue }) => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const [disableButton, setDisableButton] = useState(false);
    const handleDelete = (id) => {
        const updatedList = taskList.filter((elem) => elem.id !== id);
        setTaskList(updatedList);
        setFilterList(updatedList);
        setSearchValue('');
    }
    const handleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    }
    return (
        <section>
            <ul>
                {filterList.map((elem) => (
                    <Accordion key={elem.id} data={elem} taskList={taskList} setTaskList={setTaskList} handleDelete={handleDelete} openAccordion={openAccordion} handleAccordion={handleAccordion} disableButton={disableButton} setDisableButton={setDisableButton} setFilterList={setFilterList} setSearchValue={setSearchValue} />
                ))}
            </ul>
        </section>
    )
}   