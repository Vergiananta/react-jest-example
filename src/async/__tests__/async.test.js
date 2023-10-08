import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import URLs from '../../axios-test/constant';

const apiURL = URLs.baseURL;

axios.defaults.host = apiURL;
axios.defaults.adapter = httpAdapter;

describe('async example', () => {
  beforeEach(() => {
    nock.cleanAll();

    nock(apiURL)
      .get('/posts/1')
      .reply(200, { name: 'Linmic', age: 32 });
  });

  it('works with promises', () => {
    expect.assertions(1);

    return axios.get(`${apiURL}/posts/1`).then(res => {
      expect(res.data).toMatchObject({
        name: 'Linmic',
        age: 32,
      });
    });
  });

  it('works with async', async () => {
    const result = await axios.get(`${apiURL}/posts/1`);

    expect(result.data).toMatchObject({
      name: 'Linmic',
      age: 32,
    });
  });
});
