import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";

// so here is a parent component and here is with the children will pass, so when I use the <Page> tag in other documment like the index, there I typed some stuff and if i want it to pass here temporary(no won't pass in every page that the <Page> tag is name, just where the children are .. remember: tuvo hijos fuera del matrimonio en otra casa(index.js), y ahora aca en su principal casa tiene que traerlos a mostrarlos y a q se los acepten, pero solo van  a funcionar alla en esa casa no en todas las casas donde vaya de visita)

// we use the style component global style to create global styles for the whole project, in this way we don't have to add styles every time we create something
const GlobalStyles = createGlobalStyle`

html{
  --red: #ff0000;
  --black: #393939;
  --grey: #3A3A3A;
  --gray: var(--grey);
  --lightGrey : #e1e1e1;
  --lightGray : var(--lightGrey);
  --offWhite: #ededed;
  --maxWidth: 1000px;
  --bs: 0 12px 24px 0 rgba(0,0,0,0,0.09); 
}

`;

export default function Page({ children, cool }) {
  return (
    //this <Header> is the component create ut , and it will be shown in all th epages
    <div>
      <GlobalStyles/>
      <Header/> 
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

// this is a next.js library for passing props so we are make sure it will work, how? well first, we need to import it OFCOURSE my pez, luego aca creams este con el nombre de la funcion y el tipo d eprops, puede ser boolena, array, string etc, y asi el documento sabe que tipo de prop es y estar seguros.
Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
