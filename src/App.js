import { useEffect, useState } from "react";
import "./index.css";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector/CountrySelector";
import Highlight from "./components/Highlight/Highlight";
import Summary from "./components/Summary/Summary";
import { sortBy } from "lodash";

function App() {
  document.title = "COVID Statistics";
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const countries = sortBy(res.data, 'Country')
      setCountries(countries);
    });

    setSelectedCountryId("vn");
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    const selectedCountry = countries.find(
      (country) => country.ISO2.toLowerCase() === selectedCountryId
    );

    getReportByCountry(selectedCountry?.Slug).then((res) => {
      let result = res.data.slice(0, 500)
      result.pop();
      setReport(result);
    });
  }, [countries, selectedCountryId]);

  return (
    <>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      />
      <Highlight report={report} />
      <Summary report={report} selectedCountry={selectedCountryId} />
    </>
  );
}

export default App;
