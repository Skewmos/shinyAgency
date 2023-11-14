import { useEffect, useState } from "react";

interface UseFetchProps {
  url: string;
}

interface UseFetchResult {
  data: any;
  isLoading: boolean;
  error: string | null;
}

export const useFetch = ({ url }: UseFetchProps): UseFetchResult => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) {
      setError("URL is missing. Make sure to provide a URL.");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
          setData(responseData);
          setLoading(false);
      } catch (error) {
          setError(`An error occurred while fetching data: ${error.message}`);
          setLoading(false);
      }
    };

    fetchData();

  }, [url]);

  return { data, isLoading, error };
};