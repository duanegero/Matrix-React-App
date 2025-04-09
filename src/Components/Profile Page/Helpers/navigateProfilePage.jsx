//function to navigate in app
const navigateProfilePage = (studentId, navigate) => {
  //url to navigate to
  navigate(`/profile?id=${studentId}`);
};

//export to use else where
export default navigateProfilePage;
