const notePinHandler = (note, setNotes) => {
  setNotes((prev) => {
    return prev.map((refNote) => {
      if (refNote._id === note._id)
        return { ...refNote, isPinned: !refNote.isPinned };
      else return { ...refNote };
    });
  });
};
export { notePinHandler };
