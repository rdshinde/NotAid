const serverResponseHandler = (
  res,
  setNotes,
  setArchives,
  setTrash,
  userAuthState,
  navigate
) => {
  if (userAuthState?.isUserLoggedIn) {
    if (res) {
      if (res?.data?.notes && res?.data?.archives) {
        setNotes((prev) => [...res?.data?.notes]);
        setArchives((prev) => [...res?.data?.archives]);
      } else if (res?.data?.notes && res?.data?.trash) {
        setNotes((prev) => [...res?.data?.notes]);
        setTrash((prev) => [...res?.data?.trash]);
      } else if (res?.data?.notes) {
        setNotes((prev) => [...res?.data?.notes]);
      } else if (res?.data?.archives) {
        setArchives((prev) => [...res?.data?.archives]);
      } else if (res?.data?.trash) {
        setTrash((prev) => [...res?.data?.trash]);
      }
    }
  } else {
    navigate(`/auth/login`);
  }
};
export { serverResponseHandler };
