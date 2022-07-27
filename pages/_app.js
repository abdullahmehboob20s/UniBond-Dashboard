import "scss/index.scss";
import { IKContext } from "imagekitio-react";
import IconsSidebar from "layouts/IconsSidebar";

function MyApp({ Component, pageProps }) {
  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/l4k8brcjb/uniBond">
      <IconsSidebar />
      <Component {...pageProps} />
    </IKContext>
  );
}

export default MyApp;
