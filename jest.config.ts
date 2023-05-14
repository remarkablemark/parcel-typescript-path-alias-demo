import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/$1',
  },
  preset: 'ts-jest',
};

export default jestConfig;
