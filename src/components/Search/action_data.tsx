import React from 'react';

const actions_mock = {
    "best matches":[
    {
        id: 1,
        action_name: "Adobe",
        symbol: "ADBE",
        company_name: "Adobe Inc",
        price: 488
    },
    {
        id: 2,
        action_name: "Spotify Technology",
        symbol: "SPOT",
        company_name: "Spotify Technology S.A.",
        price: 229
    },
    {
        id: 3,
        action_name: "BJ's Wholesale Club",
        symbol: "BJ",
        company_name: "BJ`s Wholesale Club Holdings Inc",
        price: 45
    },
    {
        id: 4,
        action_name: "Gamestop",
        symbol: "GME",
        company_name: "Gamestop Corporation",
        price: 176
    },
    {
        id: 5,
        action_name: "Tesla",
        symbol: "TSLA",
        company_name: "Tesla Inc",
        price: 580
    },
]}
const actions_mock_search_api = [
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

