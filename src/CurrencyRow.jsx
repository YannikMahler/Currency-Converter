import React from "react";

function CurrencyRow(props) {
  const { currencyOptions, selectedCurrency, onChangeCurrency } = props;
  return (
    <div className="currencyRow">
      <input type="number" className="input" />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
