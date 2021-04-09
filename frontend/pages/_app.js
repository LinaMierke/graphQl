import NProgress from "nprogress";
import Router from "next/router";
import Page from "../components/Page";
//to do swap in your own=> this will call our coustume one from styles
import "../components/styles/nprogress.css";

//here it is how the router(var show loading the info) is, to start and when finish and when load an error to, just in case
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

//this _app.js is a particular next.js element that will make sure is going to pass in every single rendering of the page, so here is liek the higher up. Always shown, never goes away. Tip: always next,js has a part name pages, and here it is where _app.js belongs.

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

//nprogress is a package to show the loading speed of the page
