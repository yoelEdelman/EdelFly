import axios from "axios";
import { network } from "../../util/constants";

const api = axios.create({
  baseURL: network.BASE_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function getAuthToken() {
  return "";
}

export async function postRequestAuthorized(
  url: string,
  body?: any
): Promise<any> {
  const token = getAuthToken();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  return new Promise((resolve, reject) => {
    console.log("url", url);
    console.log("Api body", body);
    console.log("Config", config);
    api
      .post(url, body, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function postRequest(url: string, body: any): Promise<any> {
  const config = { headers: { "Content-Type": "application/json" } };

  return new Promise((resolve, reject) => {
    console.log("Api URL >>> ", url);
    console.log("Api BODY >>> ", body);
    console.log("Config >>> ", config);

    api
      // .post(url, qs.stringify(body), config)
      .post(url, body, config)
      .then((response) => {
        console.log("Api postRequest >>> ", response);
        console.log("Api postRequest headers >>> ", response.headers);
        resolve(response);
      })
      .catch((error) => {
        console.log("ERROR >>> ", error);
        reject(error);
      });
  });
}

export async function patchRequest(url: string, body: any): Promise<any> {
  const token = getAuthToken();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  return new Promise((resolve, reject) => {
    api
      .patch(url, body, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function postUrlencodedRequest(
  url: string,
  params: URLSearchParams
): Promise<any> {
  const config = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  };

  return new Promise((resolve, reject) => {
    api
      .post(url, params, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("ERROR >>> ", error);
        reject(error);
      });
  });
}

export function postUrlencodedRequestHeader(
  url: string,
  params: URLSearchParams
): Promise<any> {
  const config = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  };
  return new Promise((resolve, reject) => {
    api
      .post(url, params, config)
      .then((response) => {
        resolve(response.headers);
      })
      .catch((error) => {
        console.log("ERROR >>> ", error);
        reject(error);
      });
  });
}

export function putRequest(url: string, body: any): Promise<any> {
  return new Promise((resolve, reject) => {
    api
      .put(url, body)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function getRequest(url: string, params?: any): Promise<any> {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    params: params,
  };
  return new Promise((resolve, reject) => {
    api
      .get(url, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function getRequestAuthorized(
  url: string,
  paramss?: any
): Promise<any> {
  const token = getAuthToken();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    params: paramss,
  };

  console.log("Header", config);
  console.log("URL", url);
  console.log("Params", config.headers.Authorization);

  return new Promise((resolve, reject) => {
    api
      .get(url, config)
      .then((response) => {
        console.log("response", response);
        resolve(response);
      })
      .catch((error) => {
        console.log("error", error);
        reject(error);
      });
  });
}

export async function deleteRequest(url: string): Promise<any> {
  const token = getAuthToken();
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  return new Promise((resolve, reject) => {
    api
      .delete(url, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
