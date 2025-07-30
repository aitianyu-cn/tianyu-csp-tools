/** @format */

import { IDatabaseConnectionConfig } from "#interface";
import { DatabaseConfigHelper } from "#utils/db/DatabaseConfigHelper";
import { IReleasable } from "@aitianyu.cn/tianyu-csp";
import { guid } from "@aitianyu.cn/types";

export class MongodbService implements IReleasable {
    private _id: string;

    public constructor(config: IDatabaseConnectionConfig) {
        this._id = guid();

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _config = DatabaseConfigHelper.sqlserver(config);

        TIANYU.lifecycle.join(this);
    }

    public get id(): string {
        return this._id;
    }

    public async close(): Promise<void> {
        TIANYU.lifecycle.leave(this.id);
    }
}
