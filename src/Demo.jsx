import { useState } from "react";

const studentsList = [
  { rollNo: 1111, name: "name1" },
  { rollNo: 2222, name: "name2" },
];

export default function Demo() {
  const [students, setStudents] = useState(studentsList);

  function updateStudentName(rollNo: number, name: string) {
    setStudents((prev) =>
      prev.map((student) =>
        student.rollNo === rollNo ? { ...student, name } : student
      )
    );

    console.log(students)
  }

  return (
    <div>
      <pre>{JSON.stringify(students, null, 2)}</pre>

      <button onClick={() => updateStudentName(1111, "Bobby")}>
        Update 1111 → Bobby
      </button>
    </div>
  );
}
