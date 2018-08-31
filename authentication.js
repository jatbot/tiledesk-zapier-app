'use strict';

const authentication = {
  type: 'basic',
  test: {
    url: 'https://api.tiledesk.com/v1/testauth'
  },
  connectionLabel: '{{bundle.authData.username}}'
};

module.exports = authentication;
