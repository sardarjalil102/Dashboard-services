import React, { useCallback, useState, useEffect } from "react";
import { Route, Routes,Link,useNavigate, } from "react-router-dom";
// local imports


import axios from "axios";
import { API ,key} from "../../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "glamor";
let toastId = null
const FormBuilder = () => {
    const [type, setType] = React.useState('Single Line Text Box')
    const [model, setModel] = React.useState(false)
    const [showFieldCreater, setShowFieldCreater] = React.useState(false)
    const [fieldName, setFieldName] = React.useState()
    const [fieldBank, setFieldBank] = React.useState([])
    const [groups,setGroups]=React.useState([])
    const [error, setError] = React.useState(false);
    const BaseUrl = key.server.api
<<<<<<< HEAD
    const navigate = useNavigate()
=======
  const navigate = useNavigate()
>>>>>>> 147a103 (env)
    const [value, setValue] = useState({
      formName: "",
      isWorkFlowEnlabed: "",
      group: "",
      instruction: "",
      type: "",
    });
  
    const options = [
        { type: 1, title: 'Single Line Text Box' },
        { type: 2, title: 'Paragraph Line Text Box' },
        { type: 3, title: 'Drop Down' },
        { type: 4, title: 'Check Box' }
    ]

  const workflow = [{id:1, type: 'isWorkFlowEnlabed'}, {id:2, type:'General' }, ]
    var config = {
        method: "get",
        // url: `${BaseUrl}/workflow-approval-group`,
      //    data:body,
        headers: {
          companyId: "1",
          Authorization: `Bearer ${key.token}`,
        },
    };
  
    const handleonChange = (evt, key) => {
      const ev = evt.target.value;
      setValue({
          ...value,
          [key]: ev,
      });
  };
    
    const getGroups =()=>{
      config.url = `${BaseUrl}/workflow-approval-group`
      config.method='get'
      axios(config)
        .then(function (response) {
          // console.log('response',response);
          setGroups(response.data.data)
        //   setInspectionLotList(response.data.data.inspectionLota)
        })
        .catch(function (error) {
          // console.log(error);
        });
   }
    
  const getFormFields = () => {  
    config.url = `${BaseUrl}/workflow-form-builder-fields/?${31}`
    config.method = 'get'
    config.params={workflowFormBuilderId:31}
    // console.log('config',config)
     axios(config)
      .then(function (response) {
        // console.log('data is',response);
        // setGroups(response.data.data)
      //   setInspectionLotList(response.data.data.inspectionLota)
      })
      .catch(function (error) {
        // console.log(error);
      });
   }
  
  const AddFormFields = () => {
      let fields = []
     let obj = {
       fieldName: fieldName,
       type:value.tyep
    }

    fields.push(obj)
    let body = {
      name: value.formName,
      // groupId:value.group,
      isWorkflowEnabled: value.isWorkFlowEnlabed,
      instructions: value.instruction,
      order: '333',
      // type:value.type
    }
      config.url = `${BaseUrl}/workflow-form-builders`
      config.method = 'post'
      config.data = body
      // console.log('workflow-form-builders',config)
        axios(config)
          .then(function (response) {
            // console.log('getGroups', response.data);
            if (!toast.isActive(toastId)) {
              // console.log("Displaying Toast");
              toast.success('Form Created Success Fully!', {
                position: toast.POSITION.TOP_RIGHT
            });
            }            
            navigate('/editForm', { state:response.data.data,isWorkflowEnabled:value.isWorkflowEnabled });
            
          //   setInspectionLotList(response.data.data.inspectionLota)
          })
          .catch(function (error) {
            toast.error('Some thing went Wrong Please All Fill all the fields care fully and try again!', {
              position: toast.POSITION.TOP_RIGHT,
              backgroud:'red'
          })
            // setError(true)
            // setTimeout(() => {
            //   setError(false)
            // }, 2000);
            // console.log('error',error);
        });
  }

  
 

   
  React.useEffect(() => {
    getGroups()
    getFormFields()
   },[])
    
   // console.log('value',value)
    const renderFormBuilder = () => {
        return (
            <div className="m-5 p-5  card">
               <label for="exampleInputEmail1">Form Name</label>
               <input  onChange={(e)=>handleonChange(e,'formName')}   type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter From Name" />
               <select onChange={(e)=>handleonChange(e,'isWorkFlowEnlabed')} className="mt-2 form-control form-select" aria-label="Default select example">
                  {workflow.map((item, index) => {
                   return <option value={item.id} key={index}>{item.type}</option>      
                  })}
                </select>
                 <label >Instruction</label>
                <input onChange={(e)=>handleonChange(e,'instruction')}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Instruction" />
             {/* <select onChange={(e)=>handleonChange(e,'type')} className="mt-2 form-control form-select" aria-label="Default select example">
                  {options.map((item, index) => {
                   return <option value={item.type} key={index}>{item.title}</option>      
                  })}
            </select> */}
          { error?  <div className="alert alert-danger mt-2" role="alert">
              Somthing Went Wrong Please Fill All the fields Carefully and try again!
          </div> :null }
             <button onClick={() => AddFormFields()} style={{ marginRight: 10 }} type="submit" className="btn m-10 align-self-lg-end col-lg-2 btn-primary mt-3">Submit</button>
            </div>
     )
    }
    
    
    
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/*<Sidebar />*/}
        <div className="layout-page">
          <Header />
          {/* {model === false ? renderFormBuilder() : renderModelBox()} */}
          { renderFormBuilder()}
          {/* {fieldBank ?  renderFormFields()  : null} */}
          <ToastContainer  className="toast-container" toastClassName="dark-toast" />
       </div>
      </div>
    </div>
  );
};

export default FormBuilder;

