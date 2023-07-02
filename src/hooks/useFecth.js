import { useEffect, useState } from "react";

/*  Use exmaple
    const productsResponse = useFetch("https://pokeapi.co/api/v2/pokemon");
    const [products, setProductsFromBe] = useState(productsResponse);
*/

export const useFetch = (url) => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const fetchRequest = async () => {
      let res = await fetch(url);
      if (res?.ok) {
        let data = await res.json();
        setResponse(data.value);
      } else {
        setResponse(undefined);
      }
    };

    fetchRequest();
  }, [url]);

  return { response };
};
