let apiUrl
const apiUrls = {
	production: 'https://calm-spire-01958.herokuapp.com',
	development: 'http://localhost:4741',
}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

module.exports = {
	apiUrl,
}
