import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

export default function App() {
  const body = qs.stringify({ q: 'Hello, world!', target: 'es', source: 'en' });
  const getData = async () => {
    try {
      const res = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: 'DEMO_KEY',
        },
      });
      console.log(res.data.url);
      setImg(res.data.url);
    } catch (err) {
      console.log(err);
    }
  };

  const postData = async () => {
    try {
      const res = await axios.post(
        'https://google-translate1.p.rapidapi.com/language/translate/v2',

        { data: body },
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'accept-encoding': 'application/gzip',
            'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
            'x-rapidapi-key':
              '4617c47134msha8ca20c76eacf3ap11debbjsn9337c995f13e',
          },
        }
      );
      console.log(res);
      setRes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [img, setImg] = useState('');
  const [response, setRes] = useState('');

  useEffect(() => {
    getData();
    postData();
  }, []);

  return (
    <div>
      <img src={img} />
      <p>{response}</p>
    </div>
  );
}
