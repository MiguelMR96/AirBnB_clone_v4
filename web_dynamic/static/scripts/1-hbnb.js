const $ = window.$;

$(document).ready(function () {
  const mydict = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop('checked') === true) {
      mydict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if ($(this).prop('checked') === false) {
      delete mydict[$(this).attr('data-id')];
    }
    const mylist = [];
    for (const a in mydict) {
      mylist.push(mydict[a]);
    }
    $('.amenities h4').text(mylist.join(', '));
  });
});
