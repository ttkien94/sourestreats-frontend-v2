import { KEY_TOKEN } from "app/const/App";
import { Navigate } from "react-router-dom";

function withAuth(WrappedComponent) {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem(KEY_TOKEN);

      if (accessToken) {
        return <WrappedComponent {...props} />;
      } else if (!accessToken) {
        return <Navigate to="/dang-nhap" />;
      }

      // If we are on server, return null
      return null;
    }
  };
}

export default withAuth;
