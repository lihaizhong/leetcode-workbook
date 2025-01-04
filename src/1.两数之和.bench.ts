import { benchmarkSuite } from "jest-bench";
import twoSum from "./1.两数之和";

benchmarkSuite('两数之和', {
  twoSum: () => {
    twoSum([1, 4, 2, 5, 6, 10, 30], 10)
  }
})
