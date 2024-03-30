import AppRouter from "./Routes";
import { useEffect } from "react";
import { fetch_user } from "./Action/index";
import { connect } from "react-redux";
import * as actions from "./Action";

const App = (props) => {
  useEffect(() => {
    props.fetch_user();
  }, []);
  return (
    <div>
      <AppRouter></AppRouter>
    </div>
  );
};

export default connect(null, actions)(App);
