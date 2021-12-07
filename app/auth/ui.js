const store = require('../store')

$(window).on('load', function () {
	$('#CyberAppD').attr('disabled', 'disabled')
})

const signUpSuccess = function (responseData) {
	$('#posts-display').text('Sign up successful')

	$('#posts-display').removeClass()
	$('#post-display').addClass('text-white')
	$('form').trigger('reset')

	setTimeout(() => $('#posts-display').text(''), 3000)

	console.log('Response data is ', responseData)
}

const signUpFailure = function (error) {
	$('#error-message').text('Sign up failed')

	$('#error-message').removeClass()
	$('#error-message').addClass('text-info')
	$('form').trigger('reset')

	setTimeout(() => $('#error-message').text(''), 3000)
	console.error('Error is', error)
}

const signInSuccess = function (responseData) {
	store.user = responseData.user
	console.log('store is ', store)

	$('#posts-display').text('You have been successfully signed in!')

	setTimeout(() => $('#posts-display').text(''), 3000)

	$('#posts-display').removeClass()
	$('#posts-display').addClass('text-white')
	$('form').trigger('reset')
	$('#before-sign-in').hide()
	$('#after-sign-in').show()
}

const signInFailure = function (error) {
	$('#error-message').text(
		'Sign in unsuccessful. Please ensure credentials are correct.'
	)

	setTimeout(() => $('#error-message').text(''), 3000)

	$('#error-message').removeClass()
	$('#error-message').addClass('text-info')
	console.error('Error is', error)

	setTimeout(() => $('#error-message').text(''), 3000)
}

const changePasswordSuccess = function (responseData) {
	$('#posts-display').text('Changed password successfully')

	$('#posts-display').removeClass()
	$('#posts-display').addClass('text-success')
	$('form').trigger('reset')

	console.log('Response data is ', responseData)
}

const changePasswordFailure = function (error) {
	$('#error-message').text('Password change failed')

	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')
	console.error('Error is', error)
}

const signOutSuccess = function (responseData) {
	$('#posts-display').text('You have been successfully signed out')
	$('#results').text('')

	$('#posts-display').removeClass()
	$('#posts-display').addClass('text-light')
	$('form').trigger('reset')

	$('#after-sign-in').hide()

	$('#before-sign-in').show()

	$('.box').text('')

	setTimeout(() => $('#posts-display').text(''), 3000)

	console.log('responseData is ', responseData)
}

const signOutError = function (error) {
	$('#error-message').text('There was a error signing you out')

	$('#error-message').removeClass()
	$('#error-message').addClass('text-info')
	console.error('Error is', error)
}

const preSignUp = function () {
	$('.sign-up-card').show()
	$('#back-to-sign-in').show()
	$('.sign-in-card').hide()
	$('#pre-sign-up').hide()
}

const BackToSignIn = function () {
	$('.sign-up-card').hide()
	$('.sign-in-card').show()
	$('#back-to-sign-in').hide()
	$('#pre-sign-up').show()
}

module.exports = {
	signUpSuccess,
	signUpFailure,
	signInSuccess,
	signInFailure,
	changePasswordSuccess,
	changePasswordFailure,
	signOutSuccess,
	signOutError,
	preSignUp,
	BackToSignIn,
}
