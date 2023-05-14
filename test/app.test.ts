beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation();
});

afterAll(() => {
  jest.restoreAllMocks();
});

it('renders without crashing', () => {
  expect(() => {
    require('../src/app');
  }).not.toThrow();
});
