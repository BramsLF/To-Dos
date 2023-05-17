import { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const lStorageItem = localStorage.getItem(itemName);
      let parsedItem;
  
      if (!lStorageItem || typeof lStorageItem !== "string") {
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(lStorageItem);
        setItem(parsedItem);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, [] );
  

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
};

export default useLocalStorage;
