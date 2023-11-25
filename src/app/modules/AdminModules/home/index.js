import React, { useState, useEffect } from "react";
import IsLoading from "app/components/loading";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Loading Data
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <>{isLoading ? <IsLoading /> : <p>Home </p>}</>;
}

export default Home;
