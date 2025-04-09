//function used to navigate pages
const navigateDetailsPage = (studentId, navigate) => {
  //url to naviage to
  navigate(`/details?id=${studentId}`);
};

//export to use elsewhere
export default navigateDetailsPage;
