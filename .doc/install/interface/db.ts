/**
 * CSP database supported field type for sql db
 *
 * @format
 */

import { IDatabaseConnectionConfig } from "#interface";
import { MapOfString, MapOfType } from "@aitianyu.cn/types";

export type DatabaseFieldType =
    | "char"
    | "varchar"
    | "text"
    | "longtext"
    | "tinyint"
    | "int"
    | "float"
    | "double"
    | "decimal"
    | "bigint"
    | "boolean";

/** CSP database supported table index type for sql db */
export type TableIndexType = "btree" | "hash";

/** SQL database field define */
export interface IDatabaseFieldDefine {
    /** field type */
    type: DatabaseFieldType;
    /** field data size */
    size?: number;
    /** field decimal size when field type is 'decimal' */
    decimal?: number;

    /** to set default zero */
    zero?: boolean;
    /** number is unsign or not */
    unsign?: boolean;

    /** field value can be null */
    nullable?: boolean;
    /** field default value */
    default?: string;

    /** name of filed */
    name: string;

    /** set current field is used for primary key */
    primary?: boolean;
    /** set current field is used for index */
    index?: TableIndexType;
}

/** CSP database install config */
export interface IDatabaseInstallConfig {
    [key: string]: {
        /** database connection config */
        config: IDatabaseConnectionConfig;
        /** table define of database */
        tables: {
            [table: string]: {
                /** fields defines of table */
                fields: IDatabaseFieldDefine[];
                /** table index type */
                index?: TableIndexType;
                /** table insert sql of table */
                data: string[];
            };
        };
    };
}

/** Generic sql database table define */
export interface GenericDatabaseTable {
    /** database id or name */
    database: string;
    /** table name */
    table: string;
    /** table index type */
    index?: TableIndexType;
    /** table sqls */
    data?: MapOfString[] | string;
    /** field defines of table */
    field: MapOfType<IDatabaseFieldDefine>;
}
