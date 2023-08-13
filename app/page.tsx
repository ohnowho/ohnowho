import "/styles/global.css";
import Main from "@/components/Main";
import axios from "axios";

export default async function Home() {
  let res = { data: null };
  let url = process.env.CONFIG_API || '';
  let token = process.env.CONFIG_TOKEN || ''
  try {
    const result = await axios.get(url, {
      headers: {
        Authorization: token,
      },
      params: {
        time: new Date()
      }
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
