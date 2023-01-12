const axios = require('axios')
const {expect} = require('chai')

describe('Update existing post api', async function () {
    it('Update POST', async function () {

        const updateAnExistingPost = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    
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
          expect(response.status).to.eql(200);
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    });

});
    
    