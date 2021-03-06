import Document, { Html, Head, NextScript, Main } from "next/document";
import { ServerStyleSheet } from "styled-components";

//this is only few places where we will use class. dont freak out
// we need to import document and html, this is from the next.js documentation =>
/*A custom Document is commonly used to augment your application's <html> and <body> tags. This is necessary because Next.js pages skip the definition of the surrounding document's markup.*/
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags}
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
