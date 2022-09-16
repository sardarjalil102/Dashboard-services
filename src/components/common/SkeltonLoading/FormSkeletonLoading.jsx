import { Skeleton } from "@mui/material";
import React from "react";
import TreeSkeletonLoading from "./TreeSkeletonLoading";

const FormSkeletonLoading = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6 px-4">
                    <form className="mt-4" action="">
                        <div style={{ height: '5vh' }} className="mb-3 row">
                            <div className="col-sm-3">
                                <Skeleton animation="pulse" />
                            </div>
                            <div className="col-sm-9">
                                <Skeleton animation="pulse" />
                            </div>
                        </div>
                        <div style={{ height: '5vh' }} className="mb-3 row">
                            <div className="col-sm-3">
                                <Skeleton animation="pulse" />
                            </div>
                            <div className="col-sm-9">
                                <Skeleton animation="pulse" />
                            </div>
                        </div>
                        <div style={{ height: '5vh' }} className="mb-3 row">
                            <div className="col-sm-3">
                                <Skeleton animation="pulse" />
                            </div>
                            <div className="col-sm-9">
                                <Skeleton animation="pulse" />
                            </div>
                        </div>
                        <div style={{ height: '5vh' }} className="mb-3 row">
                            <div className="col-sm-3">
                                <Skeleton animation="pulse" />
                            </div>
                            <div className="col-sm-9">
                                <Skeleton animation="pulse" />
                            </div>
                        </div>
                        <div style={{ height: '5vh' }} className="mb-3 row">
                            <div className="col-sm-3">
                                <Skeleton animation="pulse" />
                            </div>
                            <div className="col-sm-9">
                                <Skeleton animation="pulse" />
                            </div>
                        </div>
                        <div style={{ height: '5vh' }} className="mb-3 row">
                            <div className="col-sm-3">
                                <Skeleton animation="pulse" />
                            </div>
                            <div className="col-sm-9">
                                <Skeleton animation="pulse" />
                            </div>
                        </div>
                        <div style={{ height: '5vh' }} className="mb-3 row">
                            <div className="col-sm-3">
                                <Skeleton animation="pulse" />
                            </div>
                            <div className="col-sm-9">
                                <Skeleton animation="pulse" />
                            </div>
                        </div>
                        <div style={{ height: '5vh' }} className="mb-3 row">
                            <div className="col-sm-3">
                                <Skeleton animation="pulse" />
                            </div>
                            <div className="col-sm-9">
                                <Skeleton animation="pulse" />
                            </div>
                        </div>
                        <div style={{ height: '5vh' }} className="mb-3 row">
                            <div className="col-sm-3">
                                <Skeleton animation="pulse" />
                            </div>
                            <div className="col-sm-9">
                                <Skeleton animation="pulse" />
                            </div>
                        </div>
                        <div style={{ height: '5vh' }} className="mb-3 row">
                            <div className="col-sm-3">
                                <Skeleton animation="pulse" />
                            </div>
                            <div className="col-sm-9">
                                <Skeleton animation="pulse" />
                            </div>
                        </div>
                    </form>

                </div>
                <div className="col-md-6 text-end px-4 mt-4">
                    <div style={{ marginTop: '100px' }}
                    >
                        <Skeleton className="mt-5 pt-5 rounded" sx={{ height: 290 }} animation="wave" variant="rectangular" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormSkeletonLoading;
