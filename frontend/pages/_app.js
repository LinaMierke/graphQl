import Page from "../components/Page"
//this _app.js is a particular next.js element that will make sure is going to pass in every single rendering of the page, so here is liek the higher up. Always shown, never goes away. Tip: always next,js has a part name pages, and here it is where _app.js belongs.
export default function MyApp({Component, pageProps}){
    return (
        <Page>
            <Component {...pageProps}/>


        </Page>
    )
}