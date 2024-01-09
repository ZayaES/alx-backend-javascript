export default function updateStudentGradeByCity(students, city, newGrades) {
  const new_list = students.filter((x) => x.location === city);
  const update = new_list.map((x) => {
    let i = 0;
    while (i < newGrades.length) {
      if (x.id === newGrades[i].studentId) {
        if (newGrades[i].grade) {
          x['grades'] = newGrades[i].grade;
	}
        else {
          x['grades'] = 'N/A';
	}
      }
      i += 1;
    }
    return x;
  });
  return update;
}
