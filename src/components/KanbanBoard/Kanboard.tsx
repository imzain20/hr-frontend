import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styles from "./kanban.module.scss";
import { Accordion } from "react-bootstrap";
import PlaceHolder from "../../assets/png/soleProp_icon.png";

interface Task {
  id: string;
  content: string;
}

interface Tasks {
  [key: string]: Task[];
}

const Kanban: React.FC = () => {
  const initialTasks: Tasks = {
    "In Progress": [
      { id: "1", content: "Task 1" },
      { id: "2", content: "Task 2" },
      { id: "3", content: "Task 3" },
    ],
    Completed: [],
    Upcoming: [],
  };
  const [tasks, setTasks] = useState<Tasks>(initialTasks);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceColumn = tasks[source.droppableId];
    const destinationColumn = tasks[destination.droppableId];
    const movedTask = sourceColumn.find((task) => task.id === draggableId);

    if (movedTask) {
      // Remove task from source column
      sourceColumn.splice(source.index, 1);

      // Add task to destination column
      destinationColumn.splice(destination.index, 0, movedTask);

      setTasks({ ...tasks });
    }
  };

  return (
    <div className={styles.body}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.columns}>
          {Object.keys(tasks).map((columnId) => (
            <div key={columnId} className={styles.column}>
              <div className={styles.columnHeader}>
                <p className={styles.headerText}>{columnId}</p>
                <p className={styles.subHeaderText}>{"3 items"}</p>
              </div>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided: any, snapshot: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`${styles.droppableColumn} ${
                      snapshot.isDraggingOver ? styles.draggingOver : ""
                    }`}
                  >
                    {tasks[columnId].map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided: any, snapshot: any) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`${styles.draggableTask} ${
                              snapshot.isDragging ? styles.dragging : ""
                            }`}
                          >
                            <Accordion
                              style={{ padding: "0px" }}
                              id="myCustomAccordion"
                            >
                              <Accordion.Item
                                eventKey={task.id}
                                style={{
                                  border: "unset",
                                }}
                              >
                                <Accordion.Header style={{ border: "unset" }}>
                                  <div
                                    className={`${styles.customAccordinHeader} ${styles.customAccordionButton}`}
                                  >
                                    <p className={styles.TaskHeader}>
                                      {task.content}
                                    </p>
                                    <div className={styles.LabelRow}>
                                      <p className={styles.LabelText}>
                                        {"Task Type:"}
                                      </p>
                                      <p className={styles.LabelValue}></p>
                                    </div>
                                    <div className={styles.LabelRow}>
                                      <p className={styles.LabelText}>
                                        {"Dead Line:"}
                                      </p>
                                      <p className={styles.LabelValue}>
                                        DD.MM.YYYY
                                      </p>
                                    </div>
                                  </div>
                                </Accordion.Header>
                                <Accordion.Body style={{ padding: 0 }}>
                                  <div className={styles.AccordionBody}>
                                    <div className={styles.LabelRow}>
                                      <p className={styles.LabelText}>
                                        {"Description:"}
                                      </p>
                                      <p className={styles.LabelValue}>
                                        Lorum Ipsum
                                      </p>
                                    </div>
                                    <div className={styles.LabelRow}>
                                      <p className={styles.LabelText}>
                                        Assigned to:
                                      </p>
                                      <div className={styles.AssignedToRow}>
                                        <p className={styles.LabelValue}>
                                          <img
                                            src={PlaceHolder}
                                            alt="Avatar"
                                            className={`${styles.customavatar} avatar`}
                                          />
                                          Name Surname
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;
