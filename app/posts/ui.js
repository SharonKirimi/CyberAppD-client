'use strict'

const onCreateSuccess = function (responseData) {
	$('#posts-display').text('Post successfully created')

	$('#posts-display').removeClass()
	$('#posts-display').addClass('text-success')

	// extract the move from the response's data
	// update the div with the id `posts-display` to have html for our post
	const post = responseData.post
	$('#posts-display').html(`
    <div>
      <h3>${post.title}</h3>
      <p>Owned by: ${post.owner}</p>
      <p>ID: ${post._id}</p>
      <p>${post.category}</p>
      <p> ${post.message}</p>
    </div>
  `)

	$('form').trigger('reset')
	console.log('onCreateSuccess ran. responseData is :', responseData)
}

const onCreateFailure = function (error) {
	$('#error-message').text('Error on creating post')
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')
	console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (responseData) {
	$('#posts-display').text('All posts successfully received')
	$('#posts-display').removeClass()
	console.log('onIndexSuccess ran. responseData is :', responseData.posts)

	let postsHtml = ''
	const posts = responseData.posts
	posts.forEach((post) => {
		postsHtml += `
    <div>
      <<h3>${post.title}</h3>
      <p>Owned by: ${post.owner}</p>
      <p>ID: ${post._id}</p>
      <p>${post.category}</p>
      <p> ${post.message}</p>
    </div>
  `
	})
	$('#posts-display').html(postsHtml)
}

const onIndexFailure = function (error) {
	$('#error-message').text('Error on getting posts')
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')
	console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (responseData) {
	$('#posts-display').text('One post successfully received')
	$('#posts-display').removeClass()
	$('#posts-display').addClass('text-success')
	console.log('onShowSuccess ran. responseData is :', responseData)
	$('form').trigger('reset')

	const post = responseData.post
	$('#posts-display').html(`
    <div>
      <h3>${post.title}</h3>
      <p>Directed by: ${post.director}</p>
      <p>ID: ${post._id}</p>
    </div>
  `)
}

const onShowFailure = function (error) {
	$('#error-message').text('Error on getting post')
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')
	console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
	$('#posts-display').text('post successfully deleted')
	$('#posts-display').removeClass()
	$('#posts-display').addClass('text-success')
	$('form').trigger('reset')
	console.log('post successfully deleted')
}

const onDestroyFailure = function (error) {
	$('#error-message').text('Error on deleting post')
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')
	console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
	$('#posts-display').text('post successfully updated')
	$('#posts-display').removeClass()
	$('#posts-display').addClass('text-success')
	$('form').trigger('reset')
	console.log('post successfully updated')
}

const onUpdateFailure = function (error) {
	$('#error-message').text('Error on updating post')
	$('#error-message').removeClass()
	$('#error-message').addClass('text-danger')
	console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
	onCreateSuccess,
	onCreateFailure,
	onIndexSuccess,
	onIndexFailure,
	onShowSuccess,
	onShowFailure,
	onDestroySuccess,
	onDestroyFailure,
	onUpdateSuccess,
	onUpdateFailure,
}
