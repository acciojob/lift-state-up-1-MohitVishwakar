import { divide } from "cypress/types/lodash";
import React from "react";
const Child =({showModal,setShowModal})=>{
     return (
          <div>
             <h2>Child Component</h2>
            <button onClick={()=>setShowModal(true)}>showModal</button>
             {
                showModal && (
                    <div>
                    <h1>Modal Content</h1>
                    <p>This is the modal content</p>
                     </div>   
                )
             }
          </div>
     )
}
export default Child;