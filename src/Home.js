import { useState } from "react";
import DocList from "./DocList";
const Home = () => {
    const [docs,setDocs] = useState([
        {title:'Dr.Amal',specialty:'Pediatrics',id:1,},
        {title:'Dr.Nasra',specialty:'Dermatologist',id:2},
        {title:'Dr.Ubeid',specialty:'Neuro Surgeon',id:3}
    ]);
    const handleDelete = (id)=> {
        const newDocs = docs.filter(doc => doc.id !==id)
        setDocs(newDocs) 
    }
    return ( 
        <div className="home">
            <h1>Available Doctors</h1>
            <DocList myDocs = {docs} handleDelete ={handleDelete} />
        </div>
     );
}
 
export default Home;