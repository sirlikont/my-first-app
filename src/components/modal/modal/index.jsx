import React from 'react';

export default function ModalComponent(children) {
  return (
    <div>
      {children}
    </div>
  )
}










// import React, { useState } from 'react';

// function ModalComponent() {
//   const [show, setShow] = useState(False);
//   const handleClose = () => setShow(False);
//   const handleShow = () => setShow(True); 
//   const [switchModal, setSwitchModal] = useState(false);
//     return (
//       <div className="modal fade" id="addEmployee" tabindex="-1" aria-labelledby="addEmployeeLabel" aria-hidden="true">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="addEmployeeLabel">Add employee:</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">

//                 <form>
//                   <div className="mb-3">
//                     <label for="inputName" className="form-label">Name:</label>
//                     <input type="text" className="form-control" id="inputName">
//                   </div>
//                   <div className="mb-3">
//                     <label for="inputOccupation" className="form-label">Occupation:</label>
//                     <input type="text" className="form-control" id="inputOccupation">
//                   </div>

//                   <div className="mb-3">
//                     <label for="selectTribe" className="form-label">Tribe:</label>
//                     <select className="form-select">
//                       <option value="1">Rigas</option>
//                       <option value="2">Billing</option>
//                       <option value="3">Internstellar</option>
//                     </select>
//                   </div>
//                 </form>
//               </div>

//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button type="button" className="btn btn-primary">Save changes</button>
//               </div>

//             </div>
//           </div>
//         </div>
      
//     )
// }

// export default ModalComponent

        

            
