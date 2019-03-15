const sample = require('../samples/sample_issue');

const triggerRequest = (z, bundle) => {
  const responsePromise = z.request({
    method: 'GET',
    url: `https://api.tiledesk.com/v1/${bundle.inputData.projectid}/requests`,
    // params: {
    //   filter: bundle.inputData.filter,
    //   state: bundle.inputData.state,
    //   sort: 'updated',
    //   direction: 'desc'
    // }
  });
  // return responsePromise
  //   .then(response => JSON.parse(response.content));

  return responsePromise
    .then(response => {

    //var results = JSON.parse(bundle.request.data).results // array of contact objects
    var results = JSON.parse(response.content.requests);

      return results.map(function(request){
        request.id = request._id
        delete request._id
        return request
      });

    });
    // JSON.parse(response.content));
    


};

module.exports = {
  key: 'request',
  noun: 'Request',

  display: {
    label: 'Get Request',
    description: 'Triggers on a new request.'
  },

  operation: {
    inputFields: [
      {key: 'projectid', label:'projectid', required: true},
      // {key:'filter', required: false, label: 'Filter', choices: {assigned:'assigned',created:'created',mentioned:'mentioned',subscribed:'subscribed',all:'all'}, helpText:'Default is "assigned"'},
      // {key:'state', required: false, label: 'State', choices: {open:'open',closed:'closed',all:'all'}, helpText:'Default is "open"'}
    ],
    perform: triggerRequest,

    // sample: sample
  }
};
