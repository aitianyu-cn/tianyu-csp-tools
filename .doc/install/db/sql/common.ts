/** @format */

export const INSERT_SQL: {
    [key: string]: string;
} & { default: string } = {
    mysql: "INSERT INTO `{0}`.`{1}` ({2}) VALUES ({3});",
    default: "INSERT INTO `{0}`.`{1}` ({2}) VALUES ({3});",
};
