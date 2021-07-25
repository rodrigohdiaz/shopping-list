import React from "react";
import "./Item.css";

const Item = ({ 
            id, 
            item, 
            list, 
            // setEdit, 
            // setEditId, 
            // setItem, 
            setList, 
            complete }) => {

    const remove = (id) => {
        setList(list.filter((el) => el.id !== id));
    };

// Completed Item
    const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
  };

// Edit Item
    // const handleItem = (id) => {
    //     const editItem = list.find(el => el.id === id)
    //     setItem(editItem.item);
    //     setEdit(true);
    //     setEditId(id);
    // };

    return (
        <div className = "item">
        <input type = "checkbox"  onClick={() => (handleComplete(id))}/>
        <input
        type = "text"
        value = {item}
        style = {{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            color: "black",
            fontSize: "24px"
        }}
        className = {complete ? "complete" : ""}
        />

         {/* <button onClick = {()=>handleItem(id)}>Edit</button> */}
         <button onClick = {()=>remove(id)}>Delete</button>
         
        </div>
    );
};

export default Item