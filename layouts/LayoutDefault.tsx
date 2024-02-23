import "./style.css";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";
import type { JSX } from "solid-js";
import { RandomProvider } from "../contexts/Random";

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <RandomProvider>
      <div
        style={{
          display: "flex",
          "max-width": "900px",
          margin: "auto",
        }}
      >
        <Sidebar>
          <Logo />
          <Link href="/">Page 1</Link>
          <Link href="/page2">Page 2</Link>
          <Link href="/page-with-provider">Page with Provider</Link>
          <Link href="/page-with-provider-2">Page 2 with Provider</Link>
        </Sidebar>
        <Content>{props.children}</Content>
      </div>
    </RandomProvider>
  );
}

function Sidebar(props: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      style={{
        padding: "20px",
        "flex-shrink": 0,
        display: "flex",
        "flex-direction": "column",
        "line-height": "1.8em",
        "border-right": "2px solid #eee",
      }}
    >
      {props.children}
    </div>
  );
}

function Content(props: { children: JSX.Element }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: "20px",
          "padding-bottom": "50px",
          "min-height": "100vh",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        "margin-top": "20px",
        "margin-bottom": "10px",
      }}
    >
      <a href="/">
        <img src={logoUrl} height={64} width={64} />
      </a>
    </div>
  );
}
