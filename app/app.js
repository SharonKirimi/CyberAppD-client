const authEvents = require('./auth/events')

const postEvents = require('./posts/events')

$(() => {
	$('#sign-up').on('submit', authEvents.onSignUp)
	$('#sign-in').on('submit', authEvents.onSignIn)
	$('#change-password').on('submit', authEvents.onChangePassword)
	$('#sign-out').on('click', authEvents.onSignOut)
	$('#pre-sign-up').on('click', authEvents.onPreSignUp)
	$('#back-to-sign-in').on('click', authEvents.onBackToSignIn)

	postEvents.addHandlers()
})

$(window).on('load', () => $('#CyberAppD').off('click'))
