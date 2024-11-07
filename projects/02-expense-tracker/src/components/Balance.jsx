import { useGlobalContext } from "../context/GlobalState";

function Balance() {
  const data = useGlobalContext();

  return (
    <div>
      <h1>Balance</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default Balance;
