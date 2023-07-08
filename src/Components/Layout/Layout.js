import { Fragment } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import FooterContainer from "./Footer/FooterContainer";

const Layout = (props) => {
  return (
    <Fragment>
      <HeaderContainer />
      <main>{props.children}</main>
      <FooterContainer />
    </Fragment>
  );
};

export default Layout;
