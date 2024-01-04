// import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children?: React.ReactNode;
};

export const ContentBase: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-container">{children}</div>
      {/* <Footer lng={lng} /> */}
    </>
  );
};
