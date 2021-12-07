let apiUrl
const apiUrls = {
	production: 'https://calm-spire-01958.herokuapp.com/',
	development: 'https://calm-spire-01958.herokuapp.com/',
}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

module.exports = {
	apiUrl,
}
