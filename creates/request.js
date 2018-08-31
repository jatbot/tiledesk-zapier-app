const sample = require('../samples/sample_issue');

const createRequest = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://api.tiledesk.com/v1/${bundle.inputData.projectid}/requests`,
    body: JSON.stringify({
      requester_id: bundle.inputData.requester_id,
      requester_fullname: bundle.inputData.requester_fullname,
      first_text: bundle.inputData.first_text,
      support_status: bundle.inputData.support_status
    })
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'request',
  noun: 'Request',

  display: {
    label: 'Send a Request',
    description: 'Send a Request.'
  },

  operation: {
    inputFields: [
      {key: 'projectid', label:'Projectid', required: true},
      {key: 'requester_id', label:'Requester_id', required: true},
      {key: 'requester_fullname', label:'Requester_fullname', required: false},
      {key: 'first_text', label:'first_text', required: true},
      {key: 'support_status', label:'support_status', required: true}
    ],
    perform: createRequest,
    // sample: sample
  }
};
