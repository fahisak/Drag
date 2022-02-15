import React,{useState,useEffect} from "react";

import { ListContainer, ListItem } from "./styles";
import { DragHandle } from "./partials/DragHandle";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { db } from "./Firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const App = () => {
  
  const [newitem, setNewitem] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "items");


  const additem=
     async () => {
      await addDoc(usersCollectionRef, { item: newitem });
    };
    
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getUsers();
    }, []);

  const deleteitem = async (id) => {
    console.log("idd",id);
    const userDoc = doc(db, "items", id);
    await deleteDoc(userDoc);
  };

  console.log("users",users);
  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewitem(event.target.value);
        }}
      />
      <button onClick={additem}>Add Item</button>
      
       <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;
          const desI = param.destination?.index;
          if (desI) {
            users.splice(desI, 0, users.splice(srcI, 1)[0]);
           
          }
        }}
      >
        <ListContainer>
          <h1>The List</h1>
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {users.map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={"draggable-" + item.id}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 0 .4rem #666"
                            : "none",
                        }}
                      >
                        <DragHandle {...provided.dragHandleProps} />
                        <span>{item.item}</span>
                        <button onClick={()=>deleteitem(item.id)}>Delete</button>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ListContainer>
      </DragDropContext>
    </div>
  );
};

export default App;