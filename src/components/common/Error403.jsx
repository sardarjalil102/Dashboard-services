const Error403 = () => {
  return (
    <div className="container-xxl container-p-y text-center">
      <div className="misc-wrapper">
        <h1 className="mb-2 mx-2 fw-bolder">403</h1>
        <h1 className="mb-2 mx-2 fw-bolder">UnAuthenticated</h1>
        <p className="mb-4 mx-2">you can not access this page </p>
        {/* <a href="/" className="btn btn-primary">Back to home</a> */}
        <div className="mt-3">
          <h6 className="fw-bolder fs-1 text-warning">FORBIDDEN !</h6>
        </div>
      </div>
    </div>
  );
};

export default Error403;
