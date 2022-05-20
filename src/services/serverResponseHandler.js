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
        setNotes(() => [...res?.data?.notes]);
        setArchives(() => [...res?.data?.archives]);
      } else if (res?.data?.notes && res?.data?.trash) {
        setNotes(() => [...res?.data?.notes]);
        setTrash(() => [...res?.data?.trash]);
      } else if (res?.data?.notes) {
        setNotes(() => [...res?.data?.notes]);
      } else if (res?.data?.archives) {
        setArchives(() => [...res?.data?.archives]);
      } else if (res?.data?.trash) {
        setTrash(() => [...res?.data?.trash]);
      }
    }
  } else {
    navigate(`/`);
  }
};
export { serverResponseHandler };
