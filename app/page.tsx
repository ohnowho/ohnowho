import "/styles/global.css";
import Main from "@/components/Main";
import axios from "axios";

export default async function Home() {
  let res = { data: null };

  try {
    const result = await axios.get(process.env.CONFIG_API, {
      headers: {
        Authorization: process.env.CONFIG_TOKEN,
      },
    });
    if (result.data) {
      res = result;
    }
  } catch (err) {
    // console.log(JSON.stringify(err))
  }

  return (
    <main id="main">
      <Main res={res.data}></Main>
    </main>
  );
}
