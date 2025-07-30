/** @format */

import { DatabaseConfigHelper } from "#utils/db/DatabaseConfigHelper";

describe("aitianyu-cn.node-module.tianyu-csp-tools.unit.utils.db.RedisConverter", () => {
    it("getDatabase", () => {
        expect(DatabaseConfigHelper.redis({ database: "test" }).db).toEqual(0);
        expect(DatabaseConfigHelper.redis({ database: "17" }).db).toEqual(0);
        expect(DatabaseConfigHelper.redis({ database: "-1" }).db).toEqual(0);
        expect(DatabaseConfigHelper.redis({ database: "10" }).db).toEqual(10);
    });
});
