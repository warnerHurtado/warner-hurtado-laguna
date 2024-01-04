// import { Footer } from "./Footer";
import { Header } from "./Header";

type ContentBaseProps = {
  children?: React.ReactNode
  lng: string
};

export const ContentBase: React.FC<ContentBaseProps> = ({ children, lng }) => {
  return (
    <>
      <Header lng={lng} />
      <div className="main-container">{children}</div>
      {/* <Footer lng={lng} /> */}
    </>
  );
};
