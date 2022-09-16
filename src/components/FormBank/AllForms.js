// import React from "react";
// 
// 
// import { API, key } from "../../config";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Route, Routes,Link,useNavigate, } from "react-router-dom";
// import "./formbank.css";
// const AllForms = () => {
//   const [allForms, setAllForms] = React.useState([]);
//   const [singleForm, setSingleForm] = React.useState();
//   const [groups, setGroups] = React.useState([]);
//   const [selectedGroup, setSelectedGroup] = React.useState();
//   const [fieldData, setFieldData] = React.useState([]);
//   const [show, setShow] = React.useState(false);
//   const [mediaId, setMediaId] = React.useState('');
//   const [error, setError] = React.useState(false);
//   const [checkboxValues, setCheckBoxValues] = React.useState([]);
//   const navigate = useNavigate()
//   const gender=['Male','Female']
//   let objArraY = [];
//   const BaseUrl = key.server.api;
//   var config = {
//     method: "get",
//     // url: `${BaseUrl}workflow-approval-group`,
//     //    data:body,
//     headers: {
//       companyId: "1",
//       Authorization: `Bearer ${key.token}`,
//     },
//   };
//   // console.log('fieldData',fieldData)
//   const handleonChange = (item) => {
//     setSelectedGroup(item);
//   };

//   const getForms = () => {
//     config.url = `${BaseUrl}workflow-form-builders`;
//     config.method = "get";
//     axios(config)
//       .then(function (response) {
//         // console.log("response", response.data.data);
//         setAllForms(response.data.data);
//       })
//       .catch(function (error) {
//         // console.log(error);
//       });
//   };

//   const getGroups = () => {
//     config.url = `${BaseUrl}workflow-approval-group`;
//     config.method = "get";
//     axios(config)
//       .then(function (response) {
//         // console.log("response", response);
//         setGroups(response.data.data);
//         //   setInspectionLotList(response.data.data.inspectionLota)
//       })
//       .catch(function (error) {
//         // console.log(error);
//       });
//   };

//   const deletForm = (item) => {
//     config.url = `${BaseUrl}workflow-form-builders/${item.id}`;
//     config.method = "delete";
//     axios(config)
//       .then(function (response) {
//         // console.log("response", response);
//         let filterData= allForms.filter(data => data.id != item.id)
//         toast.success('Deleted Success Fully!', {
//           position: toast.POSITION.TOP_RIGHT
//       })
//         //   setInspectionLotList(response.data.data.inspectionLota)
//         setAllForms(filterData)
//       })
//       .catch(function (error) {
//         // console.log(error);
//       });
//   };
   
//   const goTo=(item)=>{
//     // console.log('item is',item)
//     navigate('/updateForm', { state:item });

//   }

//   const SaveEnabledForm = () => {
//     let obj = {
//       formId: singleForm && singleForm.id,
//       groupId: selectedGroup,
//       mediaId:mediaId
//       // fieldsData:fieldData
//     }
//     let array = []
//     singleForm.fields.map((item, index) => {
//       // console.log('item.value',item)
//       let dataObj={}
//            dataObj.fieldId = item.id
//            dataObj.type = item.type
//            dataObj.value = item.value
//            array.push(dataObj)
//     })
//     obj.fieldsData=array
//     config.url = `${BaseUrl}workflow-save-form`;
//     config.method = "post";
//     config.data = obj
//     // console.log("config data", config);
//     axios(config)
//       .then(function (response) {
//         toast.success('Saved Success Fully!', {
//           position: toast.POSITION.TOP_RIGHT
//       });
//         // setShow(true)
//         // setTimeout(() => {
//         //   setShow(false)
//         // }, 2000);
//       })
//       .catch(function (error) {
//         toast.error('Some thing went Wrong Please All Fill all the fields care fully and try again!', {
//           position: toast.POSITION.TOP_RIGHT,
//           backgroud:'red'
//       })
//         // console.log(error);
//       });
//   };

//   React.useEffect(() => {
//     getForms();
//     getGroups();
//   }, []);

//   const handleOnchange = (e, data) => {
//     // console.log('e is',e.target.value)
//      singleForm.fields.map((item, index) => {      
//       if (item.id == data.id) {
//          item.value = e.target.value        
//       }
//     })

//   };

//   // console.log('singleForm',singleForm)

//   const handleCheckBox = (e, data, item) => {
//     var checked = item.target.checked;
//     // console.log('checked', checked)
    
//     // var checkBox = document.getElementById("myCheck");
//     // if (checkBox.checked == true){
//     //   alert('checked')
//     // } else {
//     //   alert('Unchecked')
//     // }
  
//     singleForm.fields.map((item, index) => {      
//       if (item.id === data.id) {
//         var d = new Array();
//         let updatedList = [...checkboxValues];
//         if (checked == true) {
//           updatedList = [...updatedList, e];
//           checkboxValues.push(e)
//           // data.push(e)
//          item.value =  checkboxValues
//        }
//        else  {
//          updatedList.splice(updatedList.indexOf(e), 1);
//         }
//         setCheckBoxValues(updatedList)
//         item.value = updatedList
//         // console.log('item is',updatedList)
//      }
//    })

//   };
  
//   const handleFile = (e) => {
//        var bodyFormData = new FormData();
//        bodyFormData.append('file',e.target.files[0]);
//     let headers = {
//       "Content-Type": "multipart/form-data",
//       companyId: 1,
//       Authorization: `Bearer ${key.token}`,
//     }
//     // let a =form.append("userfile", e.target.files[0]);
//     // form.append('file', e.target.files[0])
//      config.data = bodyFormData
//      config.headers=headers
//      config.url = `${BaseUrl}file`;
//      config.method = "post";
//     axios(config)
//      .then(function (response) {
//        // console.log("response file upload is", response);
//        setMediaId(response.data.data.id)
//      })
//      .catch(function (error) {
//        // console.log(error);
//      });
// }
//   const renderInput = (item) => {
//     return (
//       <div className="form-group">
//         <input
//           type="email"
//           className="m-2 form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//           placeholder={item.name}
//           onChange={(e) => handleOnchange(e, item)}
//         />
//       </div>
//     );
//   };

//   const renderTextArea = (item) => {
//     return (
//       <div className="form-group">
//         <textarea
//           type="text"
//           placeholder={item.name}
//           className="m-2 form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//           onChange={(e) => handleOnchange(e, item)}
//         ></textarea>
//       </div>
//     );
//   };

//   const renderDropDown = (item) => {
//     return (
//       <select onChange={(e) => handleOnchange(e, item)} className="form-select m-2" aria-label="Default select example">
//         {item.items &&item.items.map((data, index) => {
//           // console.log('items are ',data)
//           return <option key={index}>
//               {data.name}
//             </option>;
//         })}
//       </select>
//     );
//   };
  
  

//   const renderCheckBox = (item) => {
//     // console.log('renderCheckBox item is',item)
//     return (
//       <div className="form-group">
//         <input
//           type="email"
//           disabled
//           className="m-2 form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//           placeholder={item.name}
//         />
//         {item.items && item.items.map((data, index) => {
//           return (
//             <>
//               <div key={index} className="m-2 form-check">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   value=""
                 
//                   onClick={(e) => handleCheckBox(data.name,item,e)}
//                   id="flexCheckDefault"
//                 />
//                 <label className="form-check-label" for="flexCheckDefault">
//                   {data.name}
//                 </label>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     );
//   };
   

//   const renderRadioButton = (item) => {
//     return (
//       <div className="form-group">
//         <input
//           type="email"
//           disabled
//           className="m-2 form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//           placeholder={item.name}
//         />
//         {
//           item.items && item.items.map((data, index) => {
//             return (
//               <div key={index} className="m-2 form-check">
//               <input onClick={(e) => handleCheckBox(data.name,item)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
//                 <label className="form-check-label" for="flexRadioDefault1">
//                   {data.name}
//               </label>
//             </div>
//              )
//           })
//        }
//     </div>
//     );
//   };

//   const renderForm = () => {
//     return (
//       <div className="row m-3">
//         <div className="col-sm-6">
//           <div className="card">
//             <div className="p-2 card-body table-wrapper-scroll-y my-custom-scrollbar">
//               <h4>All Forms</h4>
//             { allForms.length > 0 ? <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Form name</th>
//                   <th scope="col">Form Type</th>
//                   <th scope="col">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {allForms  &&
//                     allForms.map((item, index) => {
//                     // console.log('allForms',item)
//                     return (
//                       <tr key={index}>
//                         <th scope="row">{index + 1}</th>
//                         <td style={{fontSize:12}}>{item.name}</td>
//                         <td style={{fontSize:12}}>{item.isWorkflowEnabled === 1 ?"Work Flow Enabled Form":'General Form'}</td>
//                         <td>
//                         {item.isWorkflowEnabled == 1?<>  <button
//                             onClick={() => setSingleForm(item)}
//                             className=" m-1 btn btn-primary btn-sm"
//                           >
//                             +
//                           </button>
//                         </>:null}
//                           <i onClick={()=>goTo(item)} className=" m-1 fas fa-edit btn btn-sm btn-success"></i>
//                           <i onClick={()=>deletForm(item)} className=" m-1 btn-sm fas fa-delete btn btn-danger bi bi-trash"></i>
//                         </td>
//                       </tr>
//                     );
//                   })}
//               </tbody>
//             </table>
//               :<div style={{
//               display: 'flex',
//               flexFlow: 'row wrap',
//               justifyContent: 'center'}} class={'d-flex j'}><img class={'p-1'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEbS2R6DD3XKmDgTW9FLjYI0BZ88Mbs94Pcf3HIDwsACN11krPDxV1oEt80GRwe1iDKI&usqp=CAU" className="img-fluid" alt="Responsive image" /></div>
//             }
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="card">
//             <div className="p-2 card-bodycard-body table-wrapper-scroll-y my-custom-scrollbar">
//               <h5 className="card-title">User Form</h5>
//               { singleForm? (
//                 <div>
//                   <input
//                     value={`${singleForm?.name}(${singleForm.isWorkflowEnabled != 1 ?"General Form":'Work Flow Enabled Form'})`}
//                     type="text"
//                     disabled
//                     className="m-2 form-control"
//                     aria-label="Amount (to the nearest dollar)"
//                   />
//                    <input
//                     type="text"
//                     onChange={handleFile}
//                     className="m-2 form-control"
//                     name="images" id="imgid"/>
//                 {/* <input onChange={handleFile} className="m-2 form-control" type="file" name="images" id="imgid" className="imgcls"  /> */}
//                   <select
//                     onChange={(e) => handleonChange(e.target.value)}
//                     className="m-2 form-control form-select"
//                     aria-label="Default select example"
//                   >
//                     {groups &&
//                       groups.map((item, index) => {
//                         return (
//                           <option value={item.id} key={index}>
//                             {item?.name}
//                           </option>
//                         );
//                       })}
//                   </select>
//                   {singleForm &&
//                     singleForm.fields.map((item, index) => {
//                       return (
//                         <form key={index}>
//                           {item.type == 1
//                             ? renderInput(item)
//                             : item.type == 2
//                             ? renderTextArea(item)
//                             : item.type == 3
//                             ? renderDropDown(item)
//                             : item.type == 4
//                             ? renderCheckBox(item)
//                             : renderRadioButton(item)}
//                         </form>
//                       );
//                     })}
//                   <button onClick={()=>SaveEnabledForm()} className="btn m-2 align-self-center btn-success"> Save </button>
//                 </div>
//               ) : (
//                 <div style={{
//                   display: 'flex',
//                   flexFlow: 'row wrap',
//                   justifyContent: 'center'}} class={'d-flex j'}>
//                     <img class={'p-1'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEbS2R6DD3XKmDgTW9FLjYI0BZ88Mbs94Pcf3HIDwsACN11krPDxV1oEt80GRwe1iDKI&usqp=CAU" className="img-fluid" alt="Responsive image" /></div>
                 
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="layout-wrapper layout-content-navbar">
//       <div className="layout-container">
//         <Sidebar />
//         <div className="layout-page">
//           <Header />
//           {renderForm()}
//         </div>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default AllForms;

