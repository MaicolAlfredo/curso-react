import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HookPersonalizados() {
  // console.log(useFetch);
  let url = "https://pokeapi.co/api/v2/pokemon/";

  let { data, isPending, error } = useFetch(url);
  return (
    <>
      <h2>Hooks personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        {/*  <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>{JSON.stringify(data)}</code>
        </pre> */}
      </h3>
    </>
  );
}
