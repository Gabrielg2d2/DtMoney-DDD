import { AdapterAxios } from './adapter-axios'
import { HttpClient } from './httpclient'

describe('HttpClient', () => {
  const httpClient = new HttpClient()
  const mockFetch = jest.fn()
  const mockFetchResponse = {
    json: jest.fn().mockResolvedValue({ message: 'Hello World' })
  }
  const mockFetchPromise = Promise.resolve(mockFetchResponse)

  beforeEach(() => {
    global.fetch = mockFetch
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(httpClient).toBeDefined()
  })

  it('should be able to get', async () => {
    mockFetch.mockResolvedValueOnce(mockFetchPromise)
    const response = await httpClient.get('http://localhost:3333')
    expect(response).toEqual({ message: 'Hello World' })
  })

  it('should be able to post', async () => {
    mockFetch.mockResolvedValueOnce(mockFetchPromise)
    const response = await httpClient.post('http://localhost:3333', {
      message: 'Hello World'
    })
    expect(response).toEqual({ message: 'Hello World' })
  })

  it('should be able to put', async () => {
    mockFetch.mockResolvedValueOnce(mockFetchPromise)
    const response = await httpClient.put('http://localhost:3333', {
      message: 'Hello World'
    })
    expect(response).toEqual({ message: 'Hello World' })
  })

  it('should be able to delete', async () => {
    mockFetch.mockResolvedValueOnce(mockFetchPromise)
    const response = await httpClient.delete('http://localhost:3333')
    expect(response).toEqual({ message: 'Hello World' })
  })
})

describe('HttpClient - AdapterAxios', () => {
  const adapterAxios = new AdapterAxios()
  const httpClient = new HttpClient(adapterAxios)

  function makeStub(method: 'get' | 'post' | 'put' | 'delete') {
    const adapterAxiosStub = jest
      .spyOn(HttpClient.prototype, method)
      .mockResolvedValueOnce(Promise.resolve({ message: 'Hello World' }))
    return adapterAxiosStub
  }

  const result = { message: 'Hello World' }

  it('should be defined', () => {
    expect(httpClient).toBeDefined()
  })

  it('should be able to get', async () => {
    makeStub('get')
    const response = await httpClient.get('http://localhost:3333')
    expect(response).toEqual(result)
  })

  it('should be able to post', async () => {
    makeStub('post')
    const response = await httpClient.post('http://localhost:3333', {
      message: 'Hello World'
    })
    expect(response).toEqual(result)
  })

  it('should be able to put', async () => {
    makeStub('put')
    const response = await httpClient.put('http://localhost:3333', {
      message: 'Hello World'
    })
    expect(response).toEqual(result)
  })

  it('should be able to delete', async () => {
    makeStub('delete')
    const response = await httpClient.delete('http://localhost:3333')
    expect(response).toEqual(result)
  })
})
