import "/styles/global.css";
import Main from "@/components/Main";
import defaultData from "@/data/default.json";

export default function Home() {
  return (
    <main id="main">
      <Main res={defaultData}></Main>
    </main>
  );
}
