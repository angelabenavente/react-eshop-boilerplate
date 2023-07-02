import { useState } from "react";

/*
 Use example
 const [bagTotalProductsLS, setBagTotalProductsLS] = useLocalStorage(
    "ASHOES__bagTotalProducts",
    totalProductsInBag
  );

  // setBagTotalProductsLS => save in localStorage
   bagTotalProductsLS => get what is in localStorage
   "ASHOES__bagTotalProducts" => key
    totalProductsInBag => value
*/

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {}
  };
  return [storedValue, setValue];
}
