import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    // Jest-bench need its own test environment to function
    testEnvironment: "jest-bench/environment",

    testEnvironmentOptions: {
      // still Jest-bench environment will run your environment if you specify it here
      testEnvironment: "jest-environment-node",
      testEnvironmentOptions: {
        // specify any option for your environment
      },
    },
    // always include "default" reporter along with Jest-bench reporter
    // for error reporting
    reporters: [
      "default",
      [
        "jest-bench/reporter",
        {
          withOpsPerSecond: true,
        },
      ],
    ],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ["/node_modules/"],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],

    // will pick up "*.bench.js" files or files in "__benchmarks__" folder.
    testRegex: "(/__benchmarks__/.*|\\.bench)\\.(ts|tsx|js)$",

    // A map from regular expressions to paths to transformers
    transform: {
      "^.+\\.(ts|tsx)$": [
        "ts-jest",
        {
          tsconfig: "<rootDir>/tsconfig.json",
        },
      ],
    },

    projects: [
      {
        displayName: "AlgorithmLearn",

        // The root directory that Jest should scan for tests and modules within
        rootDir: "./packages/algorithm-learn",

        // A list of paths to directories that Jest should use to search for files in
        roots: ["<rootDir>/src"],
      },
    ],
  };
};
