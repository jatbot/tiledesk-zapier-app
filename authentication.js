'use strict';

const authentication = {
  type: 'basic',
  test: {
    url: 'https://api.tiledesk.com/v1/auth/signin'
  },
  connectionLabel: '{{bundle.authData.username}}'
};

module.exports = authentication;
