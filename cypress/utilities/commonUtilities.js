let accessToken = '289ab6a617678f3417aa82b3c3a643f5816eac35594106545af2e8f4d70fac6a'

const getUser = (userId) =>{
cy.request({
                failOnStatusCode: false,
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/'+userId,
                headers: {
                    authorization: 'Bearer 289ab6a617678f3417aa82b3c3a643f5816eac35594106545af2e8f4d70fac6a'
                }
            })
}

export {getUser}