const axios = require('axios')
const {expect} = require('chai')

describe('Show an existing post api', async function () {
    it('Show an Existing Post', async function () {

        const showAnExistingPost = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {

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