/** @format */

import { IDatabaseConnectionConfig, IDBConnection } from "#interface";
import { guid } from "@aitianyu.cn/types";
import { DatabaseConfigHelper } from "#utils/db/DatabaseConfigHelper";

export class PostgreService implements IDBConnection {
    private _id: string;
    private _database: string;

    public constructor(config: IDatabaseConnectionConfig) {
        this._id = guid();
        this._database = config.database || this._id;

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _config = DatabaseConfigHelper.postgre(config);

        TIANYU.lifecycle.join(this);
    }

    public get id(): string {
        return this._id;
    }
    public get name(): string {
        return this._database;
    }

    public async execute(_sql: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async executeBatch(_sql: string[]): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async query(_sql: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public async close(): Promise<void> {
        TIANYU.lifecycle.leave(this.id);
    }
}
