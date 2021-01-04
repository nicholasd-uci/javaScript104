
console.log(moment().format('dddd [the] Do [of] MMMM [at] hh:mm a'))

$('#submit').click(function (event) {
    event.preventDefault()

    $('#user').html(`
    <p>Name: ${$('#name').val()}</p>
    <p>Email: ${$('#email').val()}</p>
    <p>Address: ${$('#address').val()}</p>
    <p>Date of Birth: ${moment($('#dob').val()).format('Do [of] MMMM, YYYY')}</p>
`)

    $('#name').val('')
    $('#email').val('')
    $('#address').val('')
    $('#dob').val('')
})

