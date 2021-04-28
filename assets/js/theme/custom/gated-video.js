import PageManager from "../page-manager"

export default class GatedVideo extends PageManager {
    onReady() {
        $('#signup-button').on('click', function(e) {
            e.preventDefault()
            const signupParams = {
                firstName: $('#signup_firstname').val(),
                lastName: $('#signup_lastname').val(),
                email: $('#signup_email').val(),
                password: $('#signup_pass').val(),
                acceptsMarketingEmails: true // Require opt-in if the page does not explicitly call out consent to recieve marketing emails
            }

            const xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function() {
                if(xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // TODO: Make this UX better
                        alert('Thank you for signing up') 
                        location.reload()
                    } else {
                        // TODO: Make this UX better
                        alert(`Error with signup: ${xhr.response}`)
                    }
                }
            }
            xhr.open('POST', '/api/storefront/customers')
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.send(JSON.stringify(signupParams))
        })
    }
}