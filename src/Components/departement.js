import React from "react";
import PropTypes from "prop-types";


// const Card ="fixed top-0 left-0 bg-black  right-0 bottom-0 z-50 flexitems-center justify-center";
// const Overlay = "absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"; 
// const Popup = "bg-white rounded-md shadow-md p-4 max-w-md";

class Departement extends React.Component {
    
    
  render() {
  
    return (
      <div className="max-w-screen-xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">Departments</h1>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Department
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Faculty
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Student Count
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Courses Offered
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {this.props.departments.map((department, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" onClick={() => this.handleDepartmentClick(department)}>
                          {department.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {department.faculty}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {department.StudentCount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {department.coursesOffered.join(", ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
               
              </div>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}

Departement.propTypes = {
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      faculty: PropTypes.string.isRequired,
      StudentCount:PropTypes.string.isRequired,
      coursesOffered: PropTypes.arrayOf(PropTypes.string).isRequired,
      description :PropTypes.string.isRequired
    })
  ).isRequired,
};

Departement.defaultProps = {
  departments: [
    {
      name: "Computer Science",
      faculty: "Engineering",
      StudentCount:"100",
      coursesOffered: ["Programming", "Database Systems", "Data Structures"],
      description: "This is the description for Department 1"
    },
    {
      name: "Business Administration",
      faculty: "Business",
      StudentCount:"100",
      coursesOffered: ["Marketing", "Finance", "Accounting"],
      description: "This is the description for Department 2"
    },
    {
      name: "Psychology",
      faculty: "Arts and Science",
      StudentCount:"100",
      coursesOffered: ["Social Psychology", "Abnormal Psychology", "Developmental Psychology"],
      description: "This is the description for Department 3"
    },
  ],
};

export default Departement;
