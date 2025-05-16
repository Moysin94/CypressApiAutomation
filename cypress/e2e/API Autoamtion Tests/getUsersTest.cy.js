describe('get user test', () => {
    //Define varilable for token and using that variable to passing token wherever is required
    let accessToken='6dcd3722328af2c88fecc4ab285d4793b278d9cd3a7ef8493e4244eef6d1b7f8'

    it('get user test1', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            header: {
                authorization: 'Bearer ' + accessToken
            }
        }).then((resp)=>{
            expect(resp.status).to.eq(200),
            expect(resp.body[0].id).to.eq(7892576)
        })

    });
});