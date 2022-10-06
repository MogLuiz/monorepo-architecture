import { sum } from "@monorepo/utils/math/sum";

export default function Home() {
  return (
    <>
      <h1>Monorepo Architecture</h1>
      <span>Importing local module from our monorepo: {sum(2, 10)}</span>
    </>
  );
}
