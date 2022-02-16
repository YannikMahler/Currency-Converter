import "./App.css";
import CurrencyRow from "./CurrencyRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const BASE_URL =
  "http://api.exchangeratesapi.io/v1/latest?access_key=7482858f61eeb13ca87326c2c19d1881";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [ammount, setAmmount] = useState(1);
  const [ammountInFromCurrency, setAmmountInFromCurrency] = useState(true);

  console.log(exchangeRate);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[46]; // EUR
        const secondCurrency = Object.keys(data.rates)[149]; // USD
        setCurrencyOptions([...Object.keys(data.rates)]);
        setFromCurrency(firstCurrency);
        setToCurrency(secondCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  return (
    <div className="App">
      <div className="centerBox">
        <h1>Currency Converter</h1>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        />
        <div className="equals">=</div>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
        />
        <button
          type="button"
          className="githubButton"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://github.com/YannikMahler/Currency-Converter";
          }}
        >
          <FontAwesomeIcon icon={faGithub} className="githubIcon" />
        </button>
      </div>
    </div>
  );
}

export default App;
