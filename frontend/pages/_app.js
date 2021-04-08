import Page from "../components/page"

export default function MyApp({Component, pageProps}){
    return (
        <Page>
            <Component {...pageProps}/>


        </Page>
    )
}