const axios = require('axios')
const {expect} = require('chai')

describe('Lists all posts, but filter them api', async function () {
    it('Lists All Posts with a filter', async function () {

        const listAllPostsWithFilter = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1', {

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