export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;
export const WEB_URL = typeof window !== `undefined` ? window.location.origin : ``;
export const { NODE_ENV } = process.env;

export const IS_DEVELOPMENT = NODE_ENV === `development`;
export const IS_TEST = NODE_ENV === `test`;
export const IS_PRODUCTION = NODE_ENV === `production`;
