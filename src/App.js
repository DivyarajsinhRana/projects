import data from './data'
import List from './components/List';
import {useState} from 'react'
function App() {
  const [person,setPerson] = useState(data)
  const [clicked,setClicked] = useState(false)
  const [btntxt, setBtnTxt] = useState("Clear all")
  const handleClick = () => {
    setClicked(!clicked);
     clicked ? setPerson(data) : setPerson ([]);
     clicked ? setBtnTxt("Clear all") : setBtnTxt("Get birthday");
    
  }
  return (
    <>
     <main>
       <section className='container'>
          <h3>{person.length} birthdays today</h3>
          <List people = {person} />
          <button onClick={handleClick}>{btntxt}</button>
       </section>
       </main> 
    </>
  );
}

export default App;
