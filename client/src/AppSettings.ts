export const server = 'http://localhost:17525';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-e96oo8tg.au.auth0.com',
  client_id: 'HCJu6k36AKljkFIqQo5dyTUpqmR8ah06',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
