const axios = require('axios')
const {expect} = require('chai')

describe('Lists all post api', async function () {
    it('Lists All Posts', async function () {

        const listAllPosts = await axios.get('https://jsonplaceholder.typicode.com/posts', {

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
    