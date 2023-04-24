import React,{useState}from 'react'
import {Delete} from "@mui/icons-material";
import {EditNoteOutlined} from "@mui/icons-material";
import axios from "axios";
const Component = (props) => {
    const[newhead,setnewhead]=useState("");
    const[newsubhead,setnewsubhead]=useState("");
    const[newdate,setnewdate]=useState("");
    const[newblock,setnewblock]=useState(false);
    const {heading,subheading,_id,date}=props.list;
    async function handleDelete(id) {
        try {
          const deleted = await axios.delete(`http://localhost:3000/delete/${id}`, {
            id: id,
          });
          console.log(deleted);
        } catch (error) {
          console.error(error);
        }
      }
     function Update()
    {
        setnewblock(!newblock);
    }
    async function handleUpdate(id)
    {
        const updated=await axios.put("http://localhost:3000/update",{
            id:id,
            heading:newhead,
            subheading:newsubhead,
            date:newdate
          })
          console.log(updated);
    }
  return (
    <div className="resp_block">
    <div className="textarea">{heading}</div>
    <div className="textarea">{date}</div>
    <div className="textarea">{subheading}</div>
    <div className="icons">
    <button  className="small_btn"onClick={()=>{Update()}}><EditNoteOutlined/></button>
    <button className="small_btn deletebtn"onClick={()=>handleDelete(_id)}><Delete/></button>
    </div>
    <div className={newblock ? "displayblock":"display"}>
    <form className="form">
    <input className="textarea" type="text" placeholder="task" value={newhead} onChange={(e)=>setnewhead(e.target.value)}/>
    <input className="textarea" type="date" placeholder="date" value={newdate} onChange={(e)=>setnewdate(e.target.value)}/>
    <input className="textarea" type="text" placeholder="description" value={newsubhead} onChange={(e)=>setnewsubhead(e.target.value)}/>
    <button id="updatebtn"onClick={()=>handleUpdate(_id)}>Update</button>
    </form>
    </div>
    </div>
  );
}
export default Component;

