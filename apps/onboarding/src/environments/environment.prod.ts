declare const process: {
  env: {
    API_KEY: string;
  };
};

export const environment = {
  production: false,
  baseUrl: `https://api.themoviedb.org/3`,
  apiKey: process.env.API_KEY,
};
