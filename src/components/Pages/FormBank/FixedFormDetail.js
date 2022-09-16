import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { API, key } from "../../../config";
import axios from "axios";
import "./formbank.css";
import MainBreadcrum from "../../layout/MainBreadcrum";
import { getFixForms,getEnablesFormDetail } from "../../../Redux/features/FormSlice";
import {fetchAllGroups } from "../../../Redux/features/WorkFlowGroupSlice";
const ShowFormDetail = () => {
 const state = useSelector((state) => state) 
 const  [groupName ,setGroupName]=React.useState('')
 const {enableForms,enableFormDetail,fixedForms}=state.Form
  const[fixedFormDetail,setFixedFormDetails]=React.useState({})
  const dispatch=useDispatch()

  const getEanbleFormDetail = (data) => {
    fixedForms.map((item,index)=>{
       if(item.id === data.id){
         // console.log('item is',item)
         setFixedFormDetails(item)
       }
    })
  };
  
  React.useEffect(() => {
    dispatch(getFixForms())
    dispatch(fetchAllGroups())
  }, []);

  const renderGroups=()=>{
    let groupName=''
   state.WorkFlowGroup.allGroups &&  state.WorkFlowGroup.allGroups.map((item,index)=>{
     if(item.id == fixedFormDetail.groupId){
      groupName= item.name
     }})
     return groupName
  }

   const renderPreviewBox=()=>{
     return(
       <>
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" ariaHidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</>
     )
   }

  const renderForm = () => {
    return (
      <div className="row my-3 mx-2">
        <div className="col-sm-7 ps-0">
          <div className="card">
            <div className="p-2 card-body table-wrapper-scroll-y my-custom-scrollbar">
              {/* <h4>Approval Forms</h4> */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Form Title</th>
                    <th scope="col">Form</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {fixedForms &&
                    fixedForms.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.title}</td>
                          <td>
                            {item.from}
                          </td>
                          <td>
                            <button
                              onClick={() =>getEanbleFormDetail(item)}
                              className="btn btn-primary btn-sm"
                            >
                              Trail
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card p-2 col-lg-5 table-wrapper-scroll-y my-custom-scrollbar">
          {fixedFormDetail.title ? (
            <div className="row col-lg-6 m-1">
              <div className="col-sm-12 card p-3">
                  <h4>Trail</h4>
                  <div className=" p-2">
                          <>
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              {'From'}
                            </label>
                            <input
                             value={fixedFormDetail.from}
                              disabled
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </>
                  </div>
                  <div className="p-2">
                          <>
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              {'To'}
                            </label>
                            <input
                             value={fixedFormDetail.to}
                             disabled
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </>
                  </div>
                  <div className="p-2">
                          <>
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              {'Title'}
                            </label>
                            <input
                             value={fixedFormDetail.title}
                             disabled
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </>
                  </div>
                  <div className="p-2">
                          <>
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              {'Amount'}
                            </label>
                            <input
                             value={fixedFormDetail.amount}
                             disabled
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </>
                  </div>
                  <div className="p-2">
                          <>
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              {'Category'}
                            </label>
                            <input
                             value={fixedFormDetail.categoryId.name}
                             disabled
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </>
                  </div>
                  <div className="p-2">
                          <>
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              {'Procress Type'}
                            </label>
                            <input
                             value={fixedFormDetail.processTypeId.name}
                             disabled
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </>
                  </div>
                  <div className="p-2">
                          <>
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              {'Group'}
                            </label>
                            <input
                             value={renderGroups()}
                             disabled
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </>
                  </div>
                  <div className="p-2">
                          <>
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              {'Address'}
                            </label>
                            <input
                              value={fixedFormDetail.location}
                              disabled
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </>
                  </div>
                  <div className="p-2">
                          <>
                            <label
                              for="exampleInputEmail1"
                              className="form-label"
                            >
                              {'Documents'}
                            </label>
                         {
                           fixedFormDetail.documents && fixedFormDetail.documents.map((item,index)=>{
                             const isImgLink =(url) => {
                              if(typeof url !== 'string') return false;
                              return(url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
                          }
                         console.log('image',isImgLink(item.url)) 
                            return (
                               <div style={{marginTop:10,borderWidth:2,borderColor:'gray',d:'flex'}} class="container">
                           {isImgLink(item.url) === true ?  <img style={{height:'100px', with:'100px',   resizeMode: 'contain',}} src={item.url} class="img-thumbnail" alt="Cinque Terre" width="304" height="236"/>:<a href={item.url}>{item.url}</a>
 }
                           </div>
                            )
                           })
                         }
                          
                        </>
                  </div>
              </div>
              <div className="col-sm-12">
                {enableFormDetail.userComments &&
                 enableFormDetail.userComments.map((item, index) => {
                    return (
                      <div style={{ borderWidth: 2 }} className=" card mt-1 mb-4">
                        <div style={{width:'100%'}} className="card-body col-lg-12">
                          <p style={{ fontSize: 16, color: "green" }}>
                            {item.comment == null ? "NA" : item.comment}
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <h4 className="small mb-0 ms-2">
                                {item.user?.username
                                  ? item.user?.username
                                  : "NA"}
                              </h4>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <h4 className="small mb-0 ms-2">{item.date}</h4>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <p
                                style={{ color: "green" }}
                                className="small text-muted mb-0"
                              >
                                {item.status}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            // <div
            //   style={{}}
            //   className={"d-flex align-items-center justify-content-center"}
            // >
            //   <h1>No Form Selected Yet</h1>
            // </div>
            <div
                  style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "center",
                  }}
                  className={"d-flex j"}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEbS2R6DD3XKmDgTW9FLjYI0BZ88Mbs94Pcf3HIDwsACN11krPDxV1oEt80GRwe1iDKI&usqp=CAU"
                    className="img-fluid p-1"
                    alt="Responsive image"
                  />
                </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="row">
    <MainBreadcrum name='Fixed Form' subName=''
     links={[
       { path: "/", title: "" },
       { path: "", title: "Fixed Form", activeLink: true },
     ]}
   />
        <div className="layout-page">
          {/* <Header /> */}
          {renderForm()}
        </div>
      </div>
  );
};

export default ShowFormDetail;
