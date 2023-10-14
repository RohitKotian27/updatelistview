import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { ShowList } from './components/ShowList';
import myData from './celebrities.json';

function App() {
  const [taskList, setTaskList] = useState(myData);
  const [filterList, setFilterList] = useState(taskList);
  const [searchValue, setSearchValue] = useState();

  return (
    <div className="container">
      <SearchBar taskList={taskList} setFilterList={setFilterList} searchValue={searchValue} setSearchValue={setSearchValue}
      />
      <ShowList taskList={taskList}
        setTaskList={setTaskList} filterList={filterList} setFilterList={setFilterList} setSearchValue={setSearchValue}
      />
    </div>
  );
}

export default App;
