import { useEffect, useState } from "react";
import Container from "./Container";
import Section from "./Section";
import axios from "axios";

export default function Crud() {
  const [emp, setEmp] = useState(null);
  const [dalate, setDelete] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");

  let baseURL = import.meta.env.VITE_GET_DATA_URL;
  const getData = () => axios.get(baseURL).then((res) => setEmp(res.data));
  useEffect(() => {
    getData();
  }, []);
  
  
  const employeesList = emp?.map((empl, inx) => {
      return (
        <li key={empl.id} className="cart bg-white relative">
          <button
            className="bg-red-600 p-1 text-xs absolute bottom-3 rounded-md right-3"
            onClick={() => deleteEmployee(empl.id)}
          >
            Delete
          </button>{" "}
          <span className="absolute bg-sky-600 w-5 h-5 rounde rounded-full flex justify-center items-center text-white">{inx + 1} </span>
          <br />
          name: {empl.name} <br />
          id: {empl.id} <br />
          age: {empl.age} <br />
          salary: {empl.salary} <br />
          <button
            className="bg-green-600 p-1 text-xs absolute top-3 right-3 rounded-md"
            onClick={() => updateEmployee(empl.id)}
          >
            Update 
          </button>
        </li>
      );
   
  });

  const addEmployee = async (event) => {
    event.preventDefault();
    let employe = {
      name,
      age,
      salary,
    };

    if (updateId && updateId > 0) {
      // need to call update employee api here
      setDelete(false);
      console.log(employe);
      axios
        .put(`${baseURL}/${updateId}`, employe)
        .then((response) => {
          console.log(response);
          getData();
          setName("");
          setAge("");
          setSalary("");
        })
        .catch((error) => {
          console.error(error.message);
        })
        .finally(() => {
          setUpdateId(null);
        });
    } else {
      axios
        .post(baseURL, employe)
        .then(function (response) {
          console.log(response);
          getData();
          setName("");
          setAge("");
          setSalary("");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const deleteEmployee = (id) => {
    console.log(id);
    axios
      .delete(`${baseURL}/${id}`)
      .then((response) => {
        getData();
        console.log(`Deleted post with ID ${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateEmployee = (id) => {
    let findEmploy = emp.find((itm) => itm.id === id);
    // setUpdateId(findEmploy)
    setUpdateId(findEmploy.id);
    setName(findEmploy?.name);
    setAge(findEmploy?.age);
    setSalary(findEmploy?.salary);
    setDelete(true);
  };

  return (
    <>
      <Section className={"bg-sky-100"}>
        <Container>
          <form className="flex gap-2 mb-5 justify-center" onSubmit={addEmployee}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
            />
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Enter Salary"
            />
            {!dalate ? (
              <button type="submit" className="btn">
                Add Employee
              </button>
            ) : (
              <button type="submit" className="btn">
                Update Employee
              </button>
            )}
          </form>

          <ul className="grid grid-cols-4 gap-3">
            {emp ? employeesList : <li className="text-lg font-semibold text-sky-600">Datat Not Found</li>}
            </ul>
        </Container>
      </Section>
    </>
  );
}
