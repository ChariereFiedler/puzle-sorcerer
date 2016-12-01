import {System} from "../model/system";

export interface ILoader {
    load(filename: string): Promise<System>;
}