import PropTypes from "prop-types";

export default function Page({ children, cool }) {
  return (
    <div>
      <h1>
        I am the page component! children because Im smaller and i belong
        somewhere:$
      </h1>
      <h3>
        Lina we pass first because im the father and this are my children::::
        {cool}
      </h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,

};
