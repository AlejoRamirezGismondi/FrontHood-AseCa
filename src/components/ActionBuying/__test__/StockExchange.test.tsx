import React from 'react';
import {cleanup} from "@testing-library/react";
// https://jestjs.io/docs/asynchronous#:~:text=Promises,the%20test%20will%20automatically%20fail.
// /\ para testear promises /\

afterEach(cleanup);