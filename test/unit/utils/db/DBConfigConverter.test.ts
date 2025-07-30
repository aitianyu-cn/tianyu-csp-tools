/** @format */

import { IDatabaseConnectionConfig } from "#interface";
import { DatabaseConfigHelper } from "#utils/db/DatabaseConfigHelper";

describe("aitianyu-cn.node-module.tianyu-csp-tools.unit.utils.db.DBConfigConverter", () => {
    describe("toMysql", () => {
        it("-", () => {
            const config: IDatabaseConnectionConfig = {
                host: "localhost",
                port: 3306,
                user: "test",
                password: "test",
                timeout: 3000,
            };
            const configForMysql = DatabaseConfigHelper.mysql(config);

            expect(configForMysql).toEqual(config);
        });
    });

    describe("redis", () => {
        it("-", () => {
            const config: IDatabaseConnectionConfig = {
                host: "server",
                port: 3306,
                user: "test",
                password: "test",
                timeout: 3000,
                database: "test_1",
            };
            const configForRedis = DatabaseConfigHelper.redis(config);

            expect(configForRedis.host).toEqual("server");
            expect(configForRedis.port).toEqual(3306);
            expect(configForRedis.username).toEqual("test");
            expect(configForRedis.password).toEqual("test");
            expect(configForRedis.commandTimeout).toEqual(3000);
            expect(configForRedis.db).toEqual(1);
        });

        it("default setting", () => {
            const config: IDatabaseConnectionConfig = {
                database: "test_1",
            };
            const configForRedis = DatabaseConfigHelper.redis(config);

            expect(configForRedis.host).toEqual("localhost");
            expect(configForRedis.port).toEqual(6379);
            expect(configForRedis.username).toEqual("default");
            expect(configForRedis.db).toEqual(1);
        });

        it("no given database name", () => {
            const config: IDatabaseConnectionConfig = {};
            const configForRedis = DatabaseConfigHelper.redis(config);

            expect(configForRedis.host).toEqual("localhost");
            expect(configForRedis.port).toEqual(6379);
            expect(configForRedis.username).toEqual("default");
            expect(configForRedis.db).toEqual(0);
        });
    });
});
