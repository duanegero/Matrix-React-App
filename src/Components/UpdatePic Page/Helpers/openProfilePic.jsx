const openProfilePic = (studentId) => {
  const url = `/updatepic?id=${studentId}`;

  window.open(url, "_blank", "width=500,height=650 resizable=no");
};

export default openProfilePic;
