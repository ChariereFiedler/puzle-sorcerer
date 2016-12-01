import {Class} from "../model/class";
export interface IWriter {
	write(clazz: Class, destination: string):string;
}