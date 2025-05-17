describe('post user suit', () => {
    let accessToken='289ab6a617678f3417aa82b3c3a643f5816eac35594106545af2e8f4d70fac6a'
    const randomNum = Math.floor(Math.random() * 100000);
    const email = `automation${randomNum}@gmail.com`;
    const name=`automation${randomNum}`;
    it('post user test1', () => {
        cy.request({
            //updated
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                authorization: 'Bearer ' + accessToken
            },
            body: {
                "name": name,
                "gender": "male",
                "email": email,
                "status": "active"
            }
        }).then((resp) => {
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.eq(201)
            expect(resp.body.data).have.property('id')
            expect(resp.body.data).has.property('name',name)
            expect(resp.body.data).has.property('email',email)
            expect(resp.body.data).has.property('gender','male')
            expect(resp.body.data).has.property('status','active')
        })

    })
})