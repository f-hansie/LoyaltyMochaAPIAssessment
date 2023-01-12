const axios = require('axios')
const {expect} = require('chai')

describe('Create a new post api', async function () {
    it('send a new post request', async function () {

        const createNewPost = await axios.post('https://jsonplaceholder.typicode.com/posts', {
    
            body: ({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => {
            expect(response.status).to.eql(201);
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    });

});
    
    