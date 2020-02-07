var myDate = new Date();
var dd = myDate.getDate();
var mm = myDate.getMonth() + 1;
var yyyy = myDate.getFullYear();

function formatDate (dd, mm, yyyy) {
  if (dd < 10)  {
    dd = "0" + dd;
  }

  if (mm < 10)  {
    mm = "0" + mm;
  }

  return dd + "/" + mm + "/" + yyyy;

}

console.log(formatDate(dd, mm, yyyy));
