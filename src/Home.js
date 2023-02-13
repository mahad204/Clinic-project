import { useState } from "react";
import DocList from "./DocList";
const Home = () => {
    const [docs,setDocs] = useState([
        {title:'Dr.Amal',specialty:'Pediatrics',id:1,image:'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=1600'},
        {title:'Dr.Nasra',specialty:'Dermatologist',id:2,image:'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1600'},
        {title:'Dr.Ubeid',specialty:'Neuro Surgeon',id:3,image:'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1600'}
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