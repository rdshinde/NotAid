import styles from "./labels-page.module.css";
import { Note, Header, Sidebar } from "../../components";
import { SetDocumentTitle } from "../../services";
import { useNotes } from "../../contexts";
import { getAllLabels } from "../../utils";
export const LabelsPage = () => {
  SetDocumentTitle("NotAid | Labels");
  const { notes } = useNotes();

  const labels = getAllLabels(notes);
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles.main_container}>
       
        <div className={styles.notes_container}>
          {labels.map((label, index) => {
            return (
              <section key={index}>
                <div className={`${styles.label_name} text-default`}>
                  <h3>{label}</h3>
                </div>
                {notes.map((note) => {
                  if (note.labels.some((labelname) => labelname === label)) {
                    return <Note key={note._id} data={{ note }} />;
                  }
                })}
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};
