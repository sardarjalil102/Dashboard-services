import BreadcrumLink from "./components/BreadcrumLink";

const MainBreadcrum = ({ links, name, subName }) => {
  return (
    <div className="col-md-8">
      <h2 className="fw-bold" style={{ fontFamily: "Rubik, sans-serif" }}>
        {name} <span className="fs-5 p-abs">{subName && `(${subName})`}</span>
      </h2>
      <div className="res-divider dropdown-divider mb-3" />
      <div className="row mt-4">
        {links?.map(({ path, title, activeLink }) => (
          <BreadcrumLink
            key={path}
            path={path}
            title={title}
            activeLink={activeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default MainBreadcrum;
