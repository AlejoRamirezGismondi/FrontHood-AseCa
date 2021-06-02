import React from 'react';



const actions_mock_search_api = {
    "bestMatches": [
        {
            "1. symbol": "TESO",
            "2. name": "Tesco Corporation USA",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.8889"
        },
        {
            "1. symbol": "TSCO.LON",
            "2. name": "Tesco PLC",
            "3. type": "Equity",
            "4. region": "United Kingdom",
            "5. marketOpen": "08:00",
            "6. marketClose": "16:30",
            "7. timezone": "UTC+01",
            "8. currency": "GBX",
            "9. matchScore": "0.7273"
        },
        {
            "1. symbol": "TSCDF",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TSCDY",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TCO.DEX",
            "2. name": "Tesco PLC",
            "3. type": "Equity",
            "4. region": "XETRA",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TCO.FRK",
            "2. name": "Tesco PLC",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.7143"
        }
    ]
}

const actions_mock = [
    {
    "1. symbol": "ADBE",
    "2. name": "Adobe Inc",
    "9. matchScore": 0.864,
    },
    {
        "1. symbol": "SPOT",
        "2. name": "Spotify Technology S.A.",
        "9. matchScore": 0.875,
    },
    {
        "1. symbol": "BJ",
        "2. name": "BJ`s Wholesale Club Holdings Inc",
        "9. matchScore": 0.756,
    },
    {
        "1. symbol": "GME",
        "2. name": "Gamestop Corporation",
        "9. matchScore": 0.985,
    },
    {
        "1. symbol": "TSLA",
        "2. name": "Tesla Inc",
        "9. matchScore": 0.735,
    },]

export default {actions_mock, actions_mock_search_api}
