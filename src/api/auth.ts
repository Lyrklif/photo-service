import axios from "axios";

interface FetchTokenResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  scope: string;
  created_at: number;
}

interface IAuthCode {
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
}
const redirect_uri = "https://lyrklif.github.io/photo-service/";

const getAuthCodeUrl = (): string => {
  const params: IAuthCode = {
    client_id: import.meta.env.VITE_ACCESS_KEY,
    redirect_uri: redirect_uri,
    response_type: "code",
    scope: "public+read_user+write_likes",
  };

  let link = `https://unsplash.com/oauth/authorize`;

  Object.keys(params).forEach((key, index) => {
    const prefix = index ? "&" : "?";
    // @ts-ignore
    const value = params[key];
    link += `${prefix}${key}=${value}`;
  });

  return link;
};

const fetchToken = async (code: string): Promise<FetchTokenResponse> => {
  const requestConfig = {
    params: {
      client_id: import.meta.env.VITE_ACCESS_KEY,
      client_secret: import.meta.env.VITE_SECRET_KEY,
      redirect_uri: redirect_uri,
      code,
      grant_type: "authorization_code",
    },
  };

  const request = axios.create(requestConfig);

  const response = await request.post("https://unsplash.com/oauth/token");
  return response.data;
};

export { getAuthCodeUrl, fetchToken };
