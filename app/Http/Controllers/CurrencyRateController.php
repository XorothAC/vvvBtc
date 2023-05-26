<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CurrencyRateController extends Controller
{
    /**
     * Shows currency exchange rates for passed currencies.
     */
    public function getCurrencyRates($fsym, $tsyms)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, env('CRYPTO_COMPARE_URL') . "price?fsym=" . $fsym . "&" . $tsyms . "&api_key=" . env('CRYPTO_COMPAARE_APP_KEY'));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HEADER, false);

        $output = curl_exec($curl);
        curl_close($curl);

        return $output;
    }
}
