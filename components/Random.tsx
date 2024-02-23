import { Component } from "solid-js";
import { useRandom } from "../contexts/Random";
import { usePageContext } from "vike-solid/usePageContext";

export { Random }

const Random: Component = () => {
  const random = useRandom();
  const pageContext = usePageContext();

  return <>
    <h1>Random string:</h1>
    <h2>From pageContext: {pageContext.random}</h2>
    <h2>From provider: {random}</h2>
  </>
}