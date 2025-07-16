/** @format */

import { Utils } from "packages";

describe("aitianyu-cn.node-module.tianyu-csp.unit.utils.db.RedisConverter", () => {
    it("getDatabase", () => {
        expect(Utils.Database.Converter.redis({}, "test").db).toEqual(0);
        expect(Utils.Database.Converter.redis({}, "17").db).toEqual(0);
        expect(Utils.Database.Converter.redis({}, "-1").db).toEqual(0);
        expect(Utils.Database.Converter.redis({}, "10").db).toEqual(10);
    });
});
