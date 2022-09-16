import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getRegistrationConsent,
  updateOrCreate,
} from "../../../../Redux/features/RegistrationConsentSlice";
import Spinner from "../../../common/Spinner";
import { Col, Container, Row } from "react-bootstrap";
import MainBreadcrum from "../../../layout/MainBreadcrum";

const RegistrationConsent = () => {
  const dispatch = useDispatch();
  const [regConsent, setRegConsent] = useState({
    text: "",
    isActive: false,
  });

  const {
    RegistrationConsent: { status, consent },
  } = useSelector((state) => state);

  const handleTextChange = (value) =>
    setRegConsent({ ...regConsent, text: value });

  useEffect(() => {
    dispatch(getRegistrationConsent());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    setRegConsent((prev) => consent);
    return () => {};
  }, [consent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateOrCreate({ ...regConsent, text: regConsent.text }));
  };

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <Container>
      <Row className="row">
        <MainBreadcrum
          name="Manage Registration Consent"
          subName=""
          links={[
            { path: "/", title: "" },
            { path: "", title: "Manage Registration", activeLink: true },
          ]}
        />
      </Row>

      <Row className="mt-3">
        <Col>
          <ReactQuill
            className="rounded"
            theme="snow"
            defaultValue={regConsent.text}
            value={regConsent.text}
            onChange={handleTextChange}
          />
        </Col>
      </Row>

      <Row className="my-3">
        <Col md={4}>
          <Col>
            <span className="switch-label ">Active: </span>
          </Col>
          <Col>
            <label className="switch switch-primary">
              <input
                type="checkbox"
                className="switch-input"
                checked={regConsent.isActive}
                onChange={(e) =>
                  setRegConsent({ ...regConsent, isActive: e.target.checked })
                }
              />
              <span className="switch-toggle-slider">
                <span className="switch-on" />
                <span className="switch-off" />
              </span>
            </label>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={handleSubmit} className="btn btn-primary  my-3">
            Save
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationConsent;
