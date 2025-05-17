describe('post user suit', () => {
    let accessToken='d1b36ee8954f52c1182af7592d9c77caead1248e16e2942e1b32d9927d85ac4a'
    const randomNum = Math.floor(Math.random() * 100000);
    const email = `automation${randomNum}@gmail.com`;
    const name=`automation${randomNum}`;
    it('post user test1', () => {
        cy.request({
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