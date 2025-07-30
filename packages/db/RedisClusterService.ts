/** @format */

import { IReleasable } from "@aitianyu.cn/tianyu-csp";
import { guid } from "@aitianyu.cn/types";
import { Cluster } from "ioredis";

export class RedisClusterService extends Cluster implements IReleasable {
    private _id: string = guid();

    public get id(): string {
        return this._id;
    }

    public async close(): Promise<void> {
        await super.quit();
        TIANYU.lifecycle.leave(this.id);
    }

    public override async connect(): Promise<void> {
        await super.connect();

        TIANYU.lifecycle.join(this);
    }

    public override disconnect(reconnect?: boolean): void {
        super.disconnect(reconnect);
        TIANYU.lifecycle.leave(this.id);
    }
}
