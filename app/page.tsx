import "/styles/global.css";
import Main from "@/components/Main";
import axios from "axios";
import defaultData from "@/data/default.json";

export default async function Home() {
  let res: { data: any } = { data: null };
  let url = process.env.CONFIG_API || '';
  let token = process.env.CONFIG_TOKEN || ''

  // 仅在配置了 CONFIG_API 时才请求远端数据
  if (url) {
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
      // 请求失败时忽略错误，走下面的默认数据兜底
    }
  }

  // 未配置 CONFIG_API（或请求失败）时，使用项目内置的默认数据
  if (!res.data) {
    res = { data: defaultData };
  }

  return (
    <main id="main">
      <Main res={res.data}></Main>
    </main>
  );
}
