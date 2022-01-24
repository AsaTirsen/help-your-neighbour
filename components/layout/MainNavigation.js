import { useContext } from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>Förfrågan om husdjursvakt</h2>
      <nav>
      <ul>
        <li>
          <Link href='/'>Alla förfrågningar</Link>
        </li>
        <li>
          <Link href='/new-request'>Gör en ny förfrågan</Link>
        </li>
      </ul>
    </nav>
        </header>
  );
}

export default MainNavigation;
