const axios = require('axios')
const {expect} = require('chai')

describe('Remove a post api permanently', async function () {
    it('Delete a post api', async function () {

        const removePostPermanently = await axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
    
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => {
            expect(response.status).to.eql(200);
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    });

});