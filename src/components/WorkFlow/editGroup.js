import React from 'react'


import {  useSearchParams,useNavigate } from "react-router-dom";
import { API, key } from "../../config";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditGroup =() =>{
  // const history = useLocation();
  // const {name,id}=useParams()
  const [searchParams, setSearchParams] = useSearchParams();
  const [users, setUsers] = React.useState([])
  const navigate=useNavigate()
  const name = searchParams.get("name")
  const id = searchParams.get("id")
  const [selectedUser,setSelectedUser]=React.useState([])
  const [singleGroup, setSingleGroup] = React.useState([])
  const [approverUser, setApproverUser] = React.useState(null);
  // // console.log('result',result)
  const [groupName, setGroupName] = React.useState(name);
  const BaseUrl = key.server.api
  const role=["Viewer",'Approver']
  var config = {
    method: "post",
    //  url: `${BaseUrl}workflow-approval-group`,
    headers: {
      companyId: "1",
      Authorization: `Bearer ${key.token}`,
    },
  };

  const changeElementValue = (obj, val) => {
    let array = [];
    array.push(val.target.value);
    const newarry = singleGroup.map((item, index) => {      
      if (item.id === obj.id) {
        val.target.value === "Approver"
          ? setApproverUser(item.id)
          : setApproverUser(null);
        return { ...item, role: val.target.value };
      }
      return item;
    });
    // console.log('data that is new', newarry)
    setSingleGroup(newarry)
    setSelectedUser(newarry);
  };

  const editGroup = () => {
    const hasApprover = singleGroup.some(function (item) {
      return item.role === 'Approver';
    })
    if (!hasApprover && singleGroup.length > 1) {
      toast.error("You need to select at least one approver!", {
        position: toast.POSITION.TOP_RIGHT,
        backgroud: "red",
      });
      
    }
    else {
      var config = {
        method: "put",
        responseType: 'json',
        url: `${BaseUrl}workflow-approval-group`,
        // data:body,
        headers: {
          companyId: "1",
          Authorization: `Bearer ${key.token}`,
        },
      };
      let newArray = [];
      let array = []
      singleGroup.map((item, index) => {
        // console.log(' singleGroup item is',item)
        var id = 'id';
        var role = 'role';
        var res = {}
        res.userId=item[id];
        res[role] = item[role];
        res.serialNo = index + 1
        array.push(res)
      });
      newArray = array
      array.map((data, index) =>  {
        newArray[index].role= newArray.length == 1
        ? "A"
        : newArray[index].role == "Approver"
        ? "A"
        : "R";
      })

      let body = {
        name: groupName,
        users: newArray
      }
      config.data = body
      // console.log('config data is', config)
      axios(config)
        .then(function (response) {
          // console.log('response', response);
          toast.success('Updated Success Fully!', {
            position: toast.POSITION.TOP_RIGHT
        })
          navigate("../grouplisting", { replace: true });
        //   setInspectionLotList(response.data.data.inspectionLota)
        })
        .catch(function (error) {
          toast.error('Some thing went Wrong Please try again!', {
            position: toast.POSITION.TOP_RIGHT,
            backgroud:'red'
        })
          // console.log('error',error);
        });
    }
  }

  const getGroups = () => {
    let body = {
      id:id
    }
    var config = {
      method: "get",
      url: `${BaseUrl}workflow-approval-group`,
       data:body,
      headers: {
        companyId: "1",
        Authorization: `Bearer ${key.token}`,
      },
    };
    axios(config)
      .then(function (response) {
        // console.log('getGroups',response.data.data);
      //   setInspectionLotList(response.data.data.inspectionLota)
        response.data.data.map((item, index) => {
          if (item.id == id) {
            setSingleGroup(item.users)
            // console.log('singleGroyp',item)
         }
      })
      })
      .catch(function (error) {
        // console.log('error',error);
      });
 }

 const getUsers =()=>{
   config.url = `${BaseUrl}users`
   config.method='get'
  axios(config)
    .then(function (response) {
      // console.log('users',response.data.data);
      setUsers(response.data.data.users)
    //   setInspectionLotList(response.data.data.inspectionLota)
    })
    .catch(function (error) {
      // console.log(error);
    });
 }
  
  
 React.useEffect(() => {
   getUsers()
   getGroups()
 }, []);
  
  React.useEffect(() => {
      let result = users.filter(o1 => !singleGroup.some(o2 => o1.id === o2.id));
      setUsers(result)   
}, [singleGroup]);

const switchUser=(item,index)=>{
  const filter = users.filter(data=> data.id != item.id);
    let obj={}
    obj.username=item.username
    obj.role='Viewer'
    obj.id=item.id
    obj.email=item.email
  setUsers(filter)
  singleGroup.push(obj)        
}
  
const  removeUser=(item)=>{
  const filterItem = singleGroup.filter(data => data.id != item.id)
  const filterItem1= selectedUser.filter(data => data.id != item.id)
  setSingleGroup(filterItem)
  users.push(item)
}
 const renderUserList = (data) => {
  return (
    <div style={{height:200,overflowY:'scroll'}} class={'col justify-content-between flex-column" mt-4'}>
      <table  class="table sortable">
        <thead>
          <tr>
            {/* 
               <th>Email</th>
               */}
            <th>User Email</th>
            <th>User Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((item, index) => {
            return (
              <tr key={index}>
                {/* 
               <td>
                  <div class="form-group form-check">
                     <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                     <label class="form-check-label" for="exampleCheck1">{item.email}</label>
                  </div>
               </td>
               */}
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>
                  <button
                    onClick={()=>switchUser(item,index)}
                    style={{
                      backgroundColor: data === "Add" ? "Green" : "red",
                    }}
                    type="submit"
                    class="btn btn-danger border border-secondary"
                  >
                    {data}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
 };
  
 const renderUserListView = () => {
  return (
    <div style={{ marginTop: 10 }} class="container ">
      <div class="row">
        <div
          style={{ flexDirection: "column" }}
          class="col card  justify-content-between p-4 flex-direction-row m-2"
        >
          <h4 style={{ color: "black" }}>User List</h4>
          <hr class="my-12" />
          {renderUserList("Add")}
        </div>
        <div
          style={{ flexDirection: "column" }}
          class="col card  justify-content-between p-4 flex-direction-row m-2"
        >
          <div
            style={{ flexDirection: "row", boxShadow: "none" }}
            className={"col card justify-content-between  flex-direction-row"}
          >
            <h4 style={{ color: "black" }}>Group User List</h4>
          </div>
          <hr class="my-12" />
          {renderGroupList("X")}
        </div>
      </div>
    </div>
  );
 };
  
 const renderGroupList = (data) => {
  return (
  <div class={'col justify-content-between flex-column" mt-4'}>
  <table class="table table-responsive">
     <thead>
        <tr>
           {/* 
           <th>Email</th>
           */}
           <th>sr</th>
           <th>Name</th>
           <th>Action</th>
            <th>role</th>
        </tr>
     </thead>
     <tbody>
          {singleGroup ? singleGroup.map((item, index) => {
          // console.log('singleGroup',item)
        return (
        <tr key={index}>
           <td>{index+1}</td>
           <td>{item.username}</td>
           <td>
              <button
                 onClick={()=>removeUser(item)}
              style={{
              backgroundColor: data === "Add" ? "Green" : "red",
              }}
              type="submit"
              class="btn btn-danger border border-secondary"
              >
              {data}
              </button>
           </td>
           <td>
              
              {singleGroup.length > 1 ? <select
                          onChange={(vale) => changeElementValue(item, vale)}
                          style={{
                            padding: 2,
                            backgroundColor: "blue",
                            borderRadius: 2,
                            height: "40px",
                            width: "100px",
                          }}
                          className="form btn-sm btn-primary"
                        >
                          {approverUser === null
                            ? role.map((n) => {
                              return (
                                <option isOptionDisabled={true} value={n}>
                                  {n}
                                </option>
                              );
                            })
                            : approverUser !== null && approverUser === item.id
                              ? role.map((n) => {
                                return (
                                  <option isOptionDisabled={true} value={n}>
                                    {n}
                                  </option>
                                );
                              })
                              : ["Viewer"].map((n) => {
                                return (
                                  <option isOptionDisabled={true} value={n}>
                                    {n}
                                  </option>
                                );
                              })}
                        </select>
                        :<select disabled  style={{padding:2,backgroundColor:'blue',borderRadius:2,height:'40px',width:'100px'}} className='form btn-sm btn-primary'>
                        {role.map(n => (
                        <option   value={n}>Approver</option>
                        ))}
                     </select> }
          {/* <select onChange={(vale)=>changeElementValue(item,vale)}  style={{padding:2,backgroundColor:'red',borderRadius:2}}   style={{height:'40px',width:'190px'}} className='form btn-primary'>
            <option   value={'Approver'}>Approver</option>
          </select>
          <select  onChange={(vale)=>changeElementValue(item,vale)}  style={{padding:2,backgroundColor:'red',borderRadius:2}}   style={{height:'40px',width:'190px'}} className='form btn-primary'>
            <option   value={'Viewer'}>Viewer</option>
          </select> */}
           </td>
        </tr>
        );
        }) :
  null          
  }
     </tbody>
  </table>
  </div>
  );
  };

  const  renderFrom=()=>{
     return(
           <div className="container ">
            <div
              style={{ marginLeft: 2 }}
              class="col card  justify-content-between p-4 flex-direction-row m-2"
            >
              <h2>Update Group</h2>
                <div className="form-group">
                  <label for="pwd">Group:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="grp"
                    onChange={(e)=>setGroupName(e.target.value)}
                    placeholder="Enter Group Name"
                    name="group"
                    value={groupName}
                    />
                </div>
            </div>
          </div>
     )
 }

 return (
        
     <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/*<Sidebar />*/}
        <div className="col layout-page">
          {/*<Header />*/}
         {renderFrom()}
         {renderUserListView()}
         <button onClick={()=>editGroup()} disabled={groupName ? false:true} style={{marginRight:10}}  type="submit" class="btn m-10 align-self-lg-center col-lg-2 btn-primary mt-3">
        Update Group
     </button>
       </div>
     </div>
     
    </div>
   );
}

export default EditGroup