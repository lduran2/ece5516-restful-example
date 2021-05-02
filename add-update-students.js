// /add-update-students.js
// Adds the PUT request to table 'update-students'.
//
// By        : Leomar Durán <https://github.com/lduran2/>
// When      : 2021-05-02t14:20
// For       : ECE 5516
// Version   : 1.1
//
// Changelog :
//	v1.1 - 2021-05-02t14:20
//		supporting adding a new other school
//
//	v1.0 - 2021-05-02t02:36
//		implemented addUpdateStudents
//

(function addUpdateStudents() {
	// select the form
	const FORM = document.forms['update-students'];
	// attach the event listener
	FORM.addEventListener('submit', function (event) {
		// resolve the school
		const SCHOOL_SELECT = FORM['school'].value;
		const SCHOOL = ('other'===SCHOOL_SELECT) ? FORM['other-school'].value : SCHOOL_SELECT;
		// lookup # students
		const N_STUDENTS = FORM['n_students'].value;
		// create the JSON data object
		const DATA = {
			'school' : SCHOOL,
			'n_students' : N_STUDENTS
		};

		// createthe request
		const REQUEST = new XMLHttpRequest();
		REQUEST.open('PUT', FORM.action, true);
		REQUEST.setRequestHeader('Content-Type', 'application/json');
		REQUEST.onload = function () {
			console.log('request ( status', REQUEST.status, ') :');
			console.log(REQUEST.response);
		} /* REQUEST.onload */
		REQUEST.send(JSON.stringify(DATA));

		// prevent the GET submit
		event.preventDefault();
	}); // FORM.addEventListener('submit', ...
})(); // addUpdateStudents()

