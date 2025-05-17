describe('get user test', () => {
    //Define varilable for token and using that variable to passing token wherever is required
    let accessToken='289ab6a617678f3417aa82b3c3a643f5816eac35594106545af2e8f4d70fac6a'

    it('get user test1', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            header: {
                authorization: 'Bearer ' + accessToken
            }
        }).then((resp)=>{
            expect(resp.status).to.eq(200),
            expect(resp.body[0].id).to.eq(7896868)
        })

    });
});