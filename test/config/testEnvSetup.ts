/** @format */

import { TianyuCSP } from "@aitianyu.cn/tianyu-csp";

beforeAll(() => {
    TianyuCSP.Infra.load();
});

afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
});
