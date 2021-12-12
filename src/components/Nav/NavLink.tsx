import { FC } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface Props {
  path: string;
  text: string;
}

const NavLink: FC<Props> = ({ path, text }) => {
  let resolved = useResolvedPath(path);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className="nav-item">
      <Link to={path} className={`nav-link ${match ? "active" : ""}`}>
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
