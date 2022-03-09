import styles from "highlight.js/styles/base16/dracula.css";
import { LinksFunction, Outlet } from "remix";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Blog() {
  return (
    <div className="flex justify-center">
      <div className="prose prose-slate lg:prose-xl py-10">
        <Outlet />
      </div>
    </div>
  );
}
