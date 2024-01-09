export default function updateStudentGradeByCity(students, city, newGrades) {
  const newList = students.filter((x) => x.location === city);
  const update = newList.map((x) => {
    let i = 0;
    const y = x;
    while (i < newGrades.length) {
      if (y.id === newGrades[i].studentId) {
        if (newGrades[i].grade !== undefined) {
          y.grade = newGrades[i].grade;
        }
      } else {
        y.grade = 'N/A';
      }
      i += 1;
    }
    return y;
  });
  return update;
}
