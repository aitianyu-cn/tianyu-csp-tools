/** @format */

import { RedisService } from "packages/db";

describe("aitianyu-cn.node-module.tianyu-csp-tools.unit.db.RedisService", () => {
    const databaseConfig = {
        host: "server.tencent.backend.aitianyu.cn",
        port: 6379,
        password: "ysy1998ysy[]",
        database: "0",
    };

    afterEach(async () => {
        await TIANYU.lifecycle.recycle();
    });

    it("connect to db", async () => {
        const service = new RedisService({ ...databaseConfig });

        const result = await service.get("unit-test");
        expect(result).toEqual("This is a test string for Tianyu-CSP-Tools Testing.");
    });

    it("manually disconnect", async () => {
        const service = new RedisService({ ...databaseConfig });

        jest.spyOn(service, "close");

        const result = await service.get("unit-test");
        expect(result).toEqual("This is a test string for Tianyu-CSP-Tools Testing.");

        service.disconnect();

        await TIANYU.lifecycle.recycle();
        expect(service.close).not.toHaveBeenCalled();
    });
});
