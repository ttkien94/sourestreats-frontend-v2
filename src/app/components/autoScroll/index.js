import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function AutoScroll({ history }) {
  useEffect(() => {
    const unlisten = history?.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

// export default withRouter = () => {
//   return AutoScroll();
// };
