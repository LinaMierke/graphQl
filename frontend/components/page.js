import PropTypes from "prop-types";

// so here is a parent component and here is with the children will pass, so when I use the <Page> tag in other documment like the index, there I typed some stuff and if i want it to pass here temporary(no won't pass in every page that the <Page> tag is name, just where the children are .. remember: tuvo hijos fuera del matrimonio en otra casa(index.js), y ahora aca en su principal casa tiene que traerlos a mostrarlos y a q se los acepten, pero solo van  a funcionar alla en esa casa no en todas las casas donde vaya de visita)
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

// this is a next.js library for passing props so we are make sure it will work, how? well first, we need to import it OFCOURSE my pez, luego aca creams este con el nombre de la funcion y el tipo d eprops, puede ser boolena, array, string etc, y asi el documento sabe que tipo de prop es y estar seguros. 
Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
