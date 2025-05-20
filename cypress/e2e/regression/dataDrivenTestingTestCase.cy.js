describe('ddt test suite', ()=>{
    let accessToken = '289ab6a617678f3417aa82b3c3a643f5816eac35594106545af2e8f4d70fac6a'
    
    it('ddt test case1', ()=>{
    for(let i=1; i<=10; i++){
        const randomNum = Math.floor(Math.random() * 10000000);
        const email = `automation${randomNum}@gmail.com`;
        const name = `automation${randomNum}`;
        for(let j=1; j<=1; j++){
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
            //Validating newly ceated user
            //userId = resp.body.data.id;
            cy.log(JSON.stringify(resp));
            expect(resp.status).to.eq(201);
            expect(resp.body.data).have.property('id');
            expect(resp.body.data).has.property('name', name);
            expect(resp.body.data).has.property('email', email);
            expect(resp.body.data).has.property('gender', 'male');
            expect(resp.body.data).has.property('status', 'active');
        })
        }
        cy.log(i);
    }
    })
})