import { useState } from "react";

let studentsList = [
  { rollNo: 1111, name: "name1" },
  { rollNo: 2222, name: "name2" },
];

const Demo = (rollNo, name) => {
  const [student, setStudent] = useState(studentsList);

  let arr1 = student.forEach((student) => {
    if (student.rollNo === rollNo) {
      student.name = name;
    }
  });
  setStudent([...arr1]);
};


Demo(1111,"Bobby")

export default Demo;
