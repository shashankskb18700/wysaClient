import { connect } from "react-redux";
import "./Header.css";
import Logo from "../Logo/Logo";
const Header = (props) => {
  console.log(props);
  return (
    <div className="header">
      <Logo></Logo>
      <div>
        {props.auth == null ? (
          <div></div>
        ) : props.auth == false ? (
          <a href="https://wysaserver.onrender.com/auth/google"> Log in</a>
        ) : (
          <div>
            <a href="https://wysaserver.onrender.com/api/logout">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, null)(Header);
