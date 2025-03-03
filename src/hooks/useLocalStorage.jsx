import React, { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // get the saved value or use the initial value
  const readValue = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // State to store the current value
  const [storedValue, setStoredValue] = useState(readValue);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      const newValue = JSON.stringify(storedValue);
      window.localStorage.setItem(key, parseInt(newValue, 10));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
