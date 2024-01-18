/**
 * @jest-environment @dynatrace/runtime-simulator/lib/test-environment
 */

const fetchMock = jest.fn();
globalThis.fetch = fetchMock;

import fetchSmartscapeData from './fetch-smartscape-data'

describe('fetch-smartscape-data', () => {

  it('should return an object with a message property', async () => {
    // An example of how to overwrite the implementation of fetch within a test.
    fetchMock.mockImplementationOnce(() => {
      throw new Error('fetch should not be called in this function')
    })
    const result = await fetchSmartscapeData()
    expect(result).toEqual('Hello world')
    expect(fetchMock).not.toHaveBeenCalled();
    expect.assertions(2)
  })
})
