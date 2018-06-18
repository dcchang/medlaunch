var $form = $('form#test-form'),
    url = 'https://script.google.com/a/umich.edu/macros/s/AKfycbxzA2u7ECBV2rl99-0KkgWI5Pf2fG1zvIpUap8QUwD5GscVmu0/exec'

$('#recipient-name').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})