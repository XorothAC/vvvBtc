import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


function CurrencyRates() {
    const [dataBTC, setDataBTC] = useState([]);
    const [dataLTC, setDataLTC] = useState([]);
    var setData = {
        BTC: function (data) { setDataBTC(data); },
        LTC: function (data) { setDataLTC(data) }
    }

    const fetchRates = (from) => {
        var currencies = document.querySelectorAll('input[name=currencies]:checked');

        if (currencies.length !== 0) {
            var tsym = [];
            currencies.forEach(function (currency) {
                tsym.push(currency.value);
            })
            fetch('/api/rates/' + from + '/' + new URLSearchParams({ 'tsyms': tsym }))
                .then((response) => response.json())
                .then((json) => {
                    setData[from](json);
                });
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="container">
                        <div className="row">
                            <div className="container text-center col d-flex flex-column mb-3">
                                <label className="fw-bolder fs-2 align-baseline">BTC</label>
                                {Object.keys(dataBTC).map((currency, index) => (
                                    <div className="row" key={currency + "row"}>
                                        <div className="col" key={currency + "col1"}>{currency}</div>
                                        <div className="col" key={currency + "col2"}>{dataBTC[currency]}</div>
                                    </div>
                                ))}
                                <button className='btn btn-dark mt-2' onClick={() => fetchRates('BTC')}>Show exchange rates</button>
                            </div>
                            <div className="col d-flex flex-column mb-3">
                                <label className="fw-bolder fs-2 align-baseline">LTC</label>
                                {Object.keys(dataLTC).map((currency, index) => (
                                    <div className="row" key={currency + "row"}>
                                        <div className="col" key={currency + "col1"}>{currency}</div>
                                        <div className="col" key={currency + "col2"}>{dataLTC[currency]}</div>
                                    </div>
                                ))}
                                <button className='btn btn-dark mt-2 align-top' onClick={() => fetchRates('LTC')}>Show exchange rates</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrencyRates;

if (document.getElementById('currency-rates')) {
    ReactDOM.render(<CurrencyRates />, document.getElementById('currency-rates'));
}
