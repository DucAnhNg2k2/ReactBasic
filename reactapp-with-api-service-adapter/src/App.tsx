import { useEffect, useState } from "react";
import "./App.css";
import { useApiService } from "./hooks/useApiService";

function App() {
  const apiService = useApiService();
  const [data, setData] = useState<string>("");

  useEffect(() => {
    apiService.get<string>("https://google.com").then((value) => {
      setData(value);
    });
  }, [apiService]);

  return <div className="App">{data}</div>;
}

export default App;
