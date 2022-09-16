import { Skeleton } from "@mui/material";
import React from "react";

const TreeSkeletonLoading = () => {
    return (
        <div style={{ backgroundColor: '#f3f4f4' }} className="col-md-3 ps-5 mt-n4 ms-n2">
            <Skeleton style={{ width: '120px' }} animation="pulse" />
            <Skeleton style={{ width: '70px' }} animation="pulse" />
        </div>
    );
};

export default TreeSkeletonLoading;
