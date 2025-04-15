//defining a function with passed in variable
const openProfilePic = (studentId) => {
  //variable to handle the url path
  const url = `/updatepic?id=${studentId}`;

  //opening a new window
  window.open(url, "_blank", "width=500,height=650 resizable=no");
};

//export to use within app
export default openProfilePic;
