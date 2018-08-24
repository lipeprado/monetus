import React from "react";
import PropTypes from "prop-types";
import logo from "../../../static/images/logo.svg";
import { WrapperHead, InnerHead, Logo } from "./styled";

import SearchCompany from "../Search/SearchCompany";

const Header = ({ _handleSubmit }) => {
  return (
    <WrapperHead>
      <InnerHead>
        <Logo src={logo} />
        <SearchCompany onSubmit={_handleSubmit} />
      </InnerHead>
    </WrapperHead>
  );
};

Header.propTypes = {
  _handleSubmit: PropTypes.func.isRequired
};

export default Header;
