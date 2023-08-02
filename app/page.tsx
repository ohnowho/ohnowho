import "/styles/global.css";
import Zswiper from "@/components/zswiper";
import axios from 'axios';
export default async function Home() {
  let url =  "https://api.vika.cn/fusion/v1/datasheets/dst3H956L7YLEjNTWH/records?viewId=viws5XCBnahjy&fieldKey=name"
  const res = await axios.get(url,{
    headers: {
      Authorization: `Bearer uskKG4iSt25VxKVCqFsUTfq`
    }
  });
  return (
    <main id="main">
      {/* <div><iframe src="https://gifer.com/embed/wau" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe></div> */}
      <Zswiper res={res.data}></Zswiper>
    </main>
  )
}
