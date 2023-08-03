import axios from 'axios';

export default function handler(req, res) {
    // const result = await axios.get(process.env.CONFIG_API,{
    //     headers: {
    //       Authorization: process.env.CONFIG_TOKEN
    //     }
    //   });
    //   let configs = result.data.records.map(item=>{
    //     return {
    //       ...item.fields
    //     }
    //   }).filter(item => {
    //      return true
    //   });
    res.status(200).json({ data: 'John Doe' })
  }