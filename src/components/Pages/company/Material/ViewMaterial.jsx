import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ImageDropZone from "../InspectionPlan/components/ImageDropZone";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlants } from "../../../../Redux/features/PlantSlice";
import Spinner from "../../../../components/common/Spinner";
import { ImCross } from "react-icons/im";
import {
  fetchOneMaterialMasterData,
  updateOneMaterialMaster,
} from "../../../../Redux/features/MaterialMasterSlice";

import makeAnimated from "react-select/animated";
import FakeSelect from "../../../common/FakeSelect";
import { to_option } from "../../../../utils/handelStates";
import MainBreadcrum from "../../../layout/MainBreadcrum";
import ImageUpload from "../../../common/ImageUpload";

const ViewMaterial = () => {
  const { id } = useParams();
  // form validation rules
  const validationSchema = Yup.object().shape({
    materialsShortText: Yup.string().required(
      "Material Short Text is required"
    ),
    refernceNumber: Yup.number().required("Refrence number is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const MATERIAL_TYPE = [
    { value: "Raw", label: "Raw - R" },
    { value: "Semi-finish", label: "Semi Finish - S" },
    { value: "Finish", label: "Finish - F" },
  ];
  const [materialFormData, setMaterialFormData] = useState({});
  const [editToggle, setEditToggle] = useState(true);
  const [plantOptions, setPlantOptions] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    Plant: { plants },
    MaterialMaster: { material, status },
    AppUtils,
  } = useSelector((state) => state);
  const { register, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  useEffect(() => {
    dispatch(fetchOneMaterialMasterData(id));
    dispatch(fetchPlants(1));
  }, [dispatch, id]);

  useLayoutEffect(() => {
    const plantsOpt = to_option(
      plants,
      ["id", "plantName"],
      ["value", "label"]
    );

    // plants?.map((p) => {
    //   return { value: p.id, label: p.plantName };
    // });

    // // console.log("temp array for plant(opt) :", plantsOpt);
    setPlantOptions(plantsOpt);
    setMaterialFormData(material);

    return () => {};
  }, [material, plants, status]);

  const handelSubmit = (e) => {
    e.preventDefault();
    // // // console.log("validation");
    // // console.log(materialFormData);
    const finalData = {
      ...materialFormData,
      imageUrl: AppUtils?.fileData?.id,
    };
    dispatch(updateOneMaterialMaster({ id, finalData }));
    // setMaterialFormData(initState);
    if (status === "succeeded") {
      navigate(-1);
    }
    setEditToggle(true);
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
          name="Material"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "/material", title: "Material Master" },
            { path: "", title: "View", activeLink: true },
          ]}
        />
        <div className="col-4 align-self-center text-end">
          {editToggle ? (
            <button
              type="button"
              onClick={() => setEditToggle(false)}
              className="btn btn-primary"
            >
              Edit
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setEditToggle(true)}
              className="btn btn-dark btn-circle"
            >
              <ImCross className="mx-1" size={"1rem"} />
            </button>
          )}
        </div>
      </div>
      <div className="mt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                {/* from starts here */}
                <form
                  onSubmit={handelSubmit}
                  className="browser-default-validation"
                >
                  {/* material type */}
                  <div className="mb-3 row">
                    <label className="col-form-label col-sm-3" htmlFor="plants">
                      MATERIAL TYPE::
                    </label>
                    <div className="col-sm-9">
                      <select
                        id="material-type"
                        onChange={handleMateralTypeSelect}
                        className="form-select"
                        aria-label="Select material type "
                        disabled={true}
                      >
                        <option value="">select type</option>
                        {MATERIAL_TYPE?.map(({ value, label }) => (
                          <option
                            key={value}
                            selected={
                              material?.materialType === value ? true : false
                            }
                            value={value}
                          >
                            {label}
                          </option>
                        ))}
                      </select>
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
                        name="materialsShortText"
                        defaultValue={materialFormData.materialText}
                        onChange={(e) => {
                          setMaterialFormData({
                            ...materialFormData,
                            materialText: e.target.value,
                          });
                        }}
                        type="text"
                        // {...register("materialsShortText")}
                        className={`form-control ${
                          errors.materialsShortText ? "is-invalid" : ""
                        }`}
                        id="material-short-text"
                        placeholder="Material Short Text"
                        readOnly={editToggle}
                      />
                      <div className="invalid-feedback">
                        {errors.materialsShortText?.message}
                      </div>
                    </div>
                  </div>

                  {/* plant id */}
                  <div className="mb-3 row">
                    <label className="col-form-label col-sm-3" htmlFor="plants">
                      PLANTS:
                    </label>
                    <div className="col-sm-9">
                      {editToggle && (
                        // material
                        <FakeSelect defaultValue={material?.plants} />
                      )}
                      {!editToggle && (
                        <Select
                          id="plants"
                          cacheOptions
                          defaultValue={material?.plants}
                          options={plantOptions}
                          onChange={handleChange}
                          components={makeAnimated()}
                          isMulti
                          // isDisabled={editToggle}
                        />
                      )}
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
                        {...register("refernceNumber")}
                        className={`form-control ${
                          errors.refernceNumber ? "is-invalid" : ""
                        }`}
                        defaultValue={materialFormData.referenceNo}
                        onChange={(e) => {
                          setMaterialFormData({
                            ...materialFormData,
                            referenceNo: e.target.value,
                          });
                        }}
                        id="refrence-number"
                        placeholder="Reference Number"
                        readOnly={editToggle}
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
                          checked={materialFormData.mmFlag}
                          onChange={(e) =>
                            setMaterialFormData({
                              ...materialFormData,
                              mmFlag: e.target.checked,
                            })
                          }
                          disabled={editToggle}
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
                              ppFlag: e.target.checked,
                            })
                          }
                          id="inlineCheckbox2"
                          checked={materialFormData.ppFlag}
                          disabled={editToggle}
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
                              sdFlag: e.target.checked,
                            })
                          }
                          checked={materialFormData.sdFlag}
                          disabled={editToggle}
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

                  {!editToggle && (
                    <div className="row">
                      <div className="col-12 align-self-center text-center">
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
              <div className="col-md-6">
                <ImageUpload
                  image={materialFormData?.imageUrl}
                  edit={!editToggle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewMaterial;
