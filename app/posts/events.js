'use strict'

const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreatePost = function (event) {
	event.preventDefault()
	console.log('onCreatePost ran!')

	const form = event.target
	const formData = getFormFields(form)

	api.create(formData).then(ui.onCreateSuccess).catch(ui.onCreateFailure)
}

const onIndexPosts = function (event) {
	event.preventDefault()
	console.log('onIndexPosts ran!')

	api.index().then(ui.onIndexSuccess).catch(ui.onIndexFailure)
}

const onShowPost = function (event) {
	event.preventDefault()
	console.log('onShowPost ran!')

	const form = event.target
	const formData = getFormFields(form)
	const id = formData.Post.id

	api.show(id).then(ui.onShowSuccess).catch(ui.onShowFailure)
}

const onDeletePost = function (event) {
	event.preventDefault()
	console.log('onDeletePost ran!')

	const form = event.target
	const formData = getFormFields(form)
	const id = formData.Post.id

	api.destroy(id).then(ui.onDeleteSuccess).catch(ui.onDeleteFailure)
}

const onUpdatePost = function (event) {
	event.preventDefault()
	console.log('onUpdatePost ran!')

	const form = event.target
	const formData = getFormFields(form)
	const id = formData.Post.id

	api.update(id, formData).then(ui.onUpdateSuccess).catch(ui.onUpdateFailure)
}

const addHandlers = () => {
	$('#Posts-create').on('submit', onCreatePost)
	$('#Posts-index').on('submit', onIndexPosts)
	$('#Posts-show').on('submit', onShowPost)
	$('#Posts-delete').on('submit', onDeletePost)
	$('#Posts-update').on('submit', onUpdatePost)
}

module.exports = {
	addHandlers,
}
