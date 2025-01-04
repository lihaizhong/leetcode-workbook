export type ICompare = (a: number, b: number) => number;
export declare const compare: ICompare;
/**
 * 二分查找法
 * @param target
 * @param list
 * @param internal_compare
 * @returns
 */
export default function BinarySearch(target: number, list: number[], internal_compare?: ICompare): number | null;
