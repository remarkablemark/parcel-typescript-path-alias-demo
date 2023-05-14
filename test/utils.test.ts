import { log } from '~/src/utils';

const spy = jest.spyOn(console, 'log').mockImplementation();

afterAll(() => {
  jest.restoreAllMocks();
});

it('logs', () => {
  log('foo');
  expect(spy).toBeCalled();
});
