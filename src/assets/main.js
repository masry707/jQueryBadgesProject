$(function() {

  // your code will go here
  url = 'https://www.codeschool.com/users/smartec.json'
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(response) {
      // console.log(response)
      completed_courses = response.courses.completed;
      for(var i = 0; i < completed_courses.length; i++) {
        course_div = ['<div class="course">'];
        course_div.push('<h3>' + completed_courses[i].title + '</h3>');
        course_div.push('<img src="' + completed_courses[i].badge + '" alt="' +
        completed_courses[i].title + '">');
        course_div.push('<a href="' + completed_courses[i].url + '" class="btn btn-primary" target="_blank">See Course</a>');
        course_div.push('</div>');
        $('#badges').append(course_div.join(' '));
      }
    }
  });

});
