

const createRequest = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://api.tiledesk.com/v1/${bundle.inputData.projectid}/requests`,
    body: JSON.stringify({
      request_id: bundle.inputData.request_id,
      requester_id: bundle.inputData.requester_id,
      requester_fullname: bundle.inputData.requester_fullname,
      first_text: bundle.inputData.first_text,
      department_id: bundle.inputData.department_id,
     // support_status: bundle.inputData.support_status
    })
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'request',
  noun: 'Request',

  display: {
    label: 'Create a New Request',
    description: 'Create a New Request.'
  },

  operation: {
    inputFields: [
      {key: 'projectid', label:'Projectid', required: true},
      {key: 'request_id', label:'Request_id', required: false},
      {key: 'requester_id', label:'Requester_id', required: true},
      {key: 'requester_fullname', label:'Requester_fullname', required: false},
      {key: 'first_text', label:'first_text', required: true},
      {key: 'department_id', label:'department_id', required: false}
     // {key: 'status', label:'status', required: true}
    ],
    perform: createRequest,

  }
};
