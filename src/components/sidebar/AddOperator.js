import React from 'react'
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import {addOperator} from '../redux/actions';
import {useState} from 'react'
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root')



  export  function AddOperator () {
    const dispatch = useDispatch();

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
      }

const [form, setForm] = useState({
    name:'',
    objective:'',
    inprogress:''
});

const handleChange =(e) => setForm({...form, [e.target.name]: e.target.value});

    return (
        <div>
        <span className="btn add-movie" onClick={openModal}>Add Operator</span> 
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>

        <form onSubmit={(e)=>{
          e.preventDefault();
          let newOperator = {
            ...form, 
            id:Math.random(),
          };
          dispatch(addOperator(newOperator));
          closeModal();
        }}>

        <label>Operator name</label>
        <input type="text" value={form.name} name='name' onChange={handleChange} required/>
       
        <label>Objective</label>
        <input type="text" value={form.objective} name='objective' onChange={handleChange} required/>

        <div>
        <button className="btn btn-primary" type="submit">Add</button>
        <button className="btn btn-danger" onClick={closeModal}>Cancel</button> 
        </div>
        
        </form>
        
        </Modal>
        </div>
    )
}

