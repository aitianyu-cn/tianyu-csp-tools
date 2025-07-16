/** @format */

import { IReleasable } from "@aitianyu.cn/tianyu-csp";
import { guid } from "@aitianyu.cn/types";
import { Callback, Redis } from "ioredis";

export class RedisService extends Redis implements IReleasable {
    private _id: string = guid();

    public get id(): string {
        return this._id;
    }

    public async close(): Promise<void> {
        await super.quit();
        TIANYU.lifecycle.leave(this.id);
    }

    public override async connect(callback?: Callback<void>): Promise<void> {
        await super.connect(callback);

        TIANYU.lifecycle.join(this);
    }

    public override disconnect(reconnect?: boolean): void {
        super.disconnect(reconnect);
        TIANYU.lifecycle.leave(this.id);
    }
}
