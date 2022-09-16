import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import ReactPaginate from "react-paginate";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ImageDropZone from "../InspectionPlan/components/ImageDropZone";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../../../../Redux/features/PlantSlice";
import Spinner from "../../../../components/common/Spinner";
import { addMaterialData } from "../../../../Redux/features/MaterialMasterSlice";

import ImageUpload from "../../../common/ImageUpload";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const CreateMaterial = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    materialsShortText: Yup.string().required(
      "Material Short Text is required"
    ),
    refernceNumber: Yup.number().required("Refrence number is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const initState = {
    materialType: null,
    materialPrefix: null,
    materialText: null,
    referenceNo: null,
    mmFlag: 0,
    ppFlag: 0,
    sdFlag: 0,
    imageUrl: "",
    plantIds: [],
  };
  const dispatch = useDispatch();

  // (function () {
  //   "use strict";

  //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //   var forms = document.querySelectorAll(".needs-validation");

  //   // Loop over them and prevent submission
  //   Array.prototype.slice.call(forms).forEach(function (form) {
  //     form.addEventListener(
  //       "submit",
  //       function (event) {
  //         if (!form.checkValidity()) {
  //           event.preventDefault();
  //           event.stopPropagation();
  //         }

  //         form.classList.add("was-validated");
  //       },
  //       false
  //     );
  //   });
  // })();

  const {
    Plant: { plants },
    MaterialMaster: { status },
    AppUtils,
  } = useSelector((state) => state);

  const [materialFormData, setMaterialFormData] = useState(initState);
  // get functions to build form with useForm() hook
  const { register, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const navigate = useNavigate();

  const [plantOptions, setPlantOptions] = useState([]);
  // const [selectedPlantList, setSelectedPlantList] = useState();

  useEffect(() => {
    dispatch(fetchPlants(1));
  }, [dispatch]);

  useLayoutEffect(() => {
    const temOptArr = [];
    plants.forEach((p) => {
      temOptArr.push({ value: p.id, label: p.plantName });
      //  // // console.log({ value: work?.id, label: work?.name });
    });
    // // console.log("temp array for plant(opt) :", temOptArr);
    setPlantOptions(temOptArr);
    return () => {};
  }, [plants]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // // // console.log("validation");
    // // console.log(materialFormData);
    dispatch(
      addMaterialData({ ...materialFormData, imageUrl: AppUtils?.fileData?.id })
    );
    setMaterialFormData(initState);
    // if (status === "succeeded") {
    //   navigate(-1);
    // }
  };

  const handleChange = (selectedOption) => {
    let tempSelect = [];
    selectedOption.forEach((selec) => {
      // // // console.log(selec.value);
      tempSelect.push(selec.value);
    });
    setMaterialFormData({
      ...materialFormData,
      plantIds: tempSelect,
    });

    // // // console.log(`Option selected:`, tempSelect);
  };

  const handleMateralTypeSelect = (e) => {
    if (e.target.value === "Raw") {
      setMaterialFormData({
        ...materialFormData,
        materialType: e.target.value,
        materialPrefix: "R",
      });
    }
    if (e.target.value === "Semi-finish") {
      setMaterialFormData({
        ...materialFormData,
        materialType: e.target.value,
        materialPrefix: "S",
      });
    }
    if (e.target.value === "Finish") {
      setMaterialFormData({
        ...materialFormData,
        materialType: e.target.value,
        materialPrefix: "F",
      });
    }
  };

  if (status === "loading") {
    <Spinner />;
  }
  return (
    <>
      <div className="row">
        <MainBreadcrum
          name="Material Master"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/material", title: "Material Master" },
            { path: "", title: "Create", activeLink: true },
          ]}
        />
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                {/* from starts here */}
                <form
                  onSubmit={handelSubmit}
                  className="browser-default-validation needs-validation"
                >
                  {/* material type */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="material-type"
                    >
                      MATERIAL TYPE:
                    </label>
                    <div className="col-sm-9">
                      <select
                        required
                        id="material-type"
                        // defaultValue={materialTypes}
                        onChange={handleMateralTypeSelect}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected disabled value="">
                          Select{" "}
                        </option>
                        <option value="Raw">Raw - R</option>
                        <option value="Semi-finish">Semi Finish - S</option>
                        <option value="Finish">Finish - F</option>
                      </select>
                      {/* <span className="invalid-feedback">Required</span> */}
                    </div>
                  </div>

                  {/* materila text */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="material-short-text"
                    >
                      MATERIAL SHORT TEXT:
                    </label>
                    <div className="col-sm-9">
                      <input
                        required
                        name="materialsShortText"
                        // value={materialsShortText}
                        onChange={(e) => {
                          setMaterialFormData({
                            ...materialFormData,
                            materialText: e.target.value,
                          });
                        }}
                        type="text"
                        // {...register("materialsShortText")}
                        className="form-control"
                        id="material-short-text"
                        placeholder="Material Short Text"
                      />
                    </div>
                  </div>

                  {/* plant id */}
                  <div className="mb-3 row">
                    <label className="col-form-label col-sm-3" htmlFor="plants">
                      PLANTS:
                    </label>
                    <div className="col-sm-9">
                      <Select
                        id="plants"
                        isMulti={true}
                        aria-label={null}
                        aria-errormessage="Required"
                        // defaultValue={selectedPlantList}
                        onChange={handleChange}
                        options={plantOptions}
                      />
                    </div>
                  </div>

                  {/* referance number */}
                  <div className="mb-3 row">
                    <label
                      className="col-form-label col-sm-3"
                      htmlFor="refrence-number"
                    >
                      REFERENCE NUMBER:
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        // {...register("refernceNumber")}
                        className={`form-control ${
                          errors.refernceNumber ? "is-invalid" : ""
                        }`}
                        // value={refernceNumber}
                        onChange={(e) => {
                          setMaterialFormData({
                            ...materialFormData,
                            referenceNo: e.target.value,
                          });
                        }}
                        id="refrence-number"
                        placeholder="Reference Number"
                        required
                      />
                      <div className="invalid-feedback">
                        {errors.refernceNumber?.message}
                      </div>
                    </div>
                  </div>

                  {/* check boxes */}
                  <div className="row mb-3 mt-xxl-n1 mt-n2">
                    <div className="col-9 offset-3">
                      {/* mm flag */}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          // checked={mmFlag}
                          onChange={(e) =>
                            setMaterialFormData({
                              ...materialFormData,
                              mmFlag: e.target.checked ? 1 : 0,
                            })
                          }
                          defaultValue="option1"
                        />
                        <label
                          style={{
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                          }}
                          className="form-check-label"
                          htmlFor="inlineCheckbox1"
                        >
                          PROCUREMENT (MM)
                        </label>
                      </div>

                      {/* PP flag */}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          onChange={(e) =>
                            setMaterialFormData({
                              ...materialFormData,
                              ppFlag: e.target.checked ? 1 : 0,
                            })
                          }
                          id="inlineCheckbox2"
                          defaultValue="option2"
                        />
                        <label
                          style={{
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                          }}
                          className="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          PRODUCTION (PP)
                        </label>
                      </div>

                      {/* sd flag */}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          // checked={saleFlag}
                          onChange={(e) =>
                            setMaterialFormData({
                              ...materialFormData,
                              sdFlag: e.target.checked ? 1 : 0,
                            })
                          }
                          defaultValue="option2"
                        />
                        <label
                          style={{
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                          }}
                          className="form-check-label"
                          htmlFor="inlineCheckbox3"
                        >
                          SALES (SD)
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* <div className="mb-3 row">
                            <label
                              className="col-form-label col-sm-3"
                              htmlFor="plan-name"
                            >
                              STATUS:
                            </label>
                            <div className="col-sm-9">
                              <select
                                id="plan-name"
                                className="form-select"
                                // defaultValue={status}
                                onChange={(e) => 
                                
                                  setMaterialFormData({
                                    ...materialFormData,
                                    saleFlag: e.target.value,
                                  })
                                }
                                aria-label="Default select example"
                              >
                                <option defaultChecked>Select</option>
                                <option value="active">Active</option>
                                <option value="inactive">In Active</option>
                              </select>
                            </div>
                          </div> */}
                  <div className="row">
                    <div className="col-12 align-self-center text-center">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={
                          materialFormData.plantIds.length === 0 &&
                          materialFormData.referenceNo === null
                            ? true
                            : false
                        }
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <ImageUpload image={null} edit={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMaterial;
