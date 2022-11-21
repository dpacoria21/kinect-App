// To parse this data:
//
//   import { Convert, Datas } from "./file";
//
//   const datas = Convert.toDatas(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Datas {
    name:   string;
    series: Serie[];
};

export interface Serie {
    name:  string;
    value: number;
}

