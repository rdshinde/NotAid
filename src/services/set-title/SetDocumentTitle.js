import { useEffect } from "react";
export const SetDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, []);
};
