import { Container } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";
import React, { useEffect, useState } from "react";
function App() {
  const [personData, setPersonData] = useState(person);
  const onViewData = () => {
    setPersonData(person);
  }
  const onDelete = () => {
    setPersonData([]);
  }
  useEffect(() => {
    setPersonData([]);
  }, [])
  return (
    <div className="font color-body">
      <Container className="py-5">   
        <DatesCount person={personData} />    
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} viewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;