import PropTypes from "prop-types";
import Header from "../components/Header";

export default function Page({ children, cool }) {
  return (
    <div>
        <Header />
      <h1> Im the page component </h1>
      <h3>{cool}</h3>
      {children}
    
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
