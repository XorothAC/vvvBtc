import React, {useState, Fragment} from 'react';
import ReactDOM from 'react-dom';

function CurrencyList() {
    const currencies = [
        "USDT", "USD", "EUR", "GBP", "USDC",
        "RUB", "JPY", "CAD", "AUD", "SGD",
        "CHF", "BRL",
    ];

    return (
        <div className="btn-group-sm p-2">
            {currencies.map((currency, index) => (
                <Fragment key={currency+index}>
                    <input className="btn-check" type="checkbox" name="currencies" value={currency} key={currency} id={currency} autoComplete="off"></input>
                    <label className="btn btn-outline-dark ms-1" key={currency+"label"} htmlFor={currency}>{currency}</label>
                </Fragment>
            ))}
        </div>
    );
}

export default CurrencyList;

if (document.getElementById('currency-list')) {
    ReactDOM.render(<CurrencyList />, document.getElementById('currency-list'));
}
