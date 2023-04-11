import axios, { Method } from 'axios';
import { getConfig } from '@/utils';

interface IMethodV {
  url: string;
  method?: Method;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
}

export interface IResponse {
  data: any;
  code: number;
}

const {
  FEISHU_CONFIG: { FEISHU_URL },
} = getConfig();

const request = async ({ url, option = {} }) => {
  try {
    return axios.request({
      url,
      ...option,
    });
  } catch (error) {
    throw error;
  }
};

const methodV = async ({
  url,
  method,
  headers,
  params = {},
  query = {},
}: IMethodV): Promise<IResponse> => {
  const sendUrl: string = /^(http:\/\/|https:\/\/)/.test(url)
    ? url
    : `${FEISHU_URL}${url}`;
  try {
    return new Promise((resolve, reject) => {
      axios({
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          ...headers,
        },
        url: sendUrl,
        method,
        params: query,
        data: {
          ...params,
        },
      })
        .then(({ data, status }) => {
          resolve({ data, code: status });
        })
        .catch((error) => reject(error));
    });
  } catch (error) {
    throw error;
  }
};

export { request, methodV };
