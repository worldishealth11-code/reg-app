import { useState } from 'react'
function App() {
  const [studentName, setStudentName] = useState("")
  const [course, setCourse] = useState("")
  const [students, setStudents] = useState([])
  const addStudent = () => {

    if (studentName.trim() === "" || course === "") {
      alert("Please fill in all fields");
      return;
    }
    const newStudent = {
      id: Date.now(),
      name: studentName,
      course: course,
    }
    setStudents([...students, newStudent]);
    setStudentName('');
    setCourse("");
  };

const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  }

  return (
    <div style ={{ padding: "20px" }}>
      <h1> STUDENT REGISTRATION APP</h1>

      
        <input
          type="text"
          placeholder="Enter student name"
          value={studentName}
          onChange={(e) =>
            setStudentName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
/>        
        <br /><br />
        <button onClick={addStudent}> Add Student</button> 

        
      <h2> Registered Students</h2>

{students.map((student) => (
        <div key={student.id} style={{marginBottom: "10px"}}>
          <h3>Student ID: {student.id}</h3>
          <p>
            {student.name} - {student.course}
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

