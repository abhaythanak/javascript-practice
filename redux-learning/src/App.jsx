// import ShowTodo from "./components/Todo/ShowTodo"
// import TodoList from "./components/Todo/TodoList"

import { useState } from "react";
import DeleteConfirmation from "./components/projectsDemo/DeleteConfirmation";
import PersonDetails from "./components/projectsDemo/PersonDetails";

//import ListView from "./components/ListView";

// import Interview from "./components/Interview/Interview"

// function App() {
  

//   return (
//     <>
//        {/* <h1 className=' font-extralight'>Redux learning Featching-API's</h1> */}
//       {/*<TodoList/>
//       <ShowTodo/> */}
//       <Interview/>
//     </>
//   )
// }

// export default App




// import React, { useState } from 'react';
// import Avatar from 'react-avatar';
// import 'tailwindcss/tailwind.css';

// function App() {
//   const initialData = [
//     {
//       name: 'John Doe',
//       picture: 'https://placekitten.com/200/200',
//       age: 30,
//       gender: 'Male',
//       country: 'USA',
//       description: 'A description about John Doe.',
//       isOpen: false,
//     },
//     {
//       name: 'Jane Smith',
//       picture: 'https://placekitten.com/201/201',
//       age: 25,
//       gender: 'Female',
//       country: 'Canada',
//       description: 'A description about Jane Smith.',
//       isOpen: false,
//     },
//     {
//       name: 'Bob Johnson',
//       picture: 'https://placekitten.com/202/202',
//       age: 35,
//       gender: 'Male',
//       country: 'UK',
//       description: 'A description about Bob Johnson.',
//       isOpen: false,
//     },
//     {
//       name: 'Alice Williams',
//       picture: 'https://placekitten.com/203/203',
//       age: 28,
//       gender: 'Female',
//       country: 'Australia',
//       description: 'A description about Alice Williams.',
//       isOpen: false,
//     },
//     {
//       name: 'Charlie Brown',
//       picture: 'https://placekitten.com/204/204',
//       age: 32,
//       gender: 'Male',
//       country: 'Germany',
//       description: 'A description about Charlie Brown.',
//       isOpen: false,
//     },
//   ];

//   const [data, setData] = useState(initialData);
//   const [isEditing, setIsEditing] = useState(false);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [editedIndex, setEditedIndex] = useState(null);
//   const [editedPerson, setEditedPerson] = useState({});

//   const handleEdit = (index) => {
//     setEditedIndex(index);
//     setEditedPerson({ ...data[index] });
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     const updatedData = [...data];
//     updatedData[editedIndex] = editedPerson;
//     setData(updatedData);

//     setIsEditing(false);
//     setEditedIndex(null);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditedIndex(null);
//   };

//   const handleDelete = (index) => {
//     setEditedIndex(index);
//     setShowDeleteConfirmation(true);
//   };

//   const confirmDelete = () => {
//     const updatedData = [...data];
//     updatedData.splice(editedIndex, 1);
//     setData(updatedData);

//     setShowDeleteConfirmation(false);
//     setEditedIndex(null);
//   };

//   const cancelDelete = () => {
//     setShowDeleteConfirmation(false);
//     setEditedIndex(null);
//   };

//   const handleChange = (field, value) => {
//     setEditedPerson((prev) => ({ ...prev, [field]: value }));
//   };

//   const handlePersonToggle = (index) => {
//     const updatedData = [...data];
//     updatedData[index].isOpen = !updatedData[index].isOpen;
//     setData(updatedData);
//   };

//   const renderDetails = (person, index) => (
//     <div key={index} className="mt-4">
//       <button
//         className={`bg-blue-500 text-white px-4 py-2 rounded ${person.isOpen ? 'mb-2' : ''}`}
//         onClick={() => handlePersonToggle(index)}
//       >
//         {person.isOpen ? 'Close' : 'Open'} Details for {person.name}
//       </button>

//       {person.isOpen && (
//         <>
//           <Avatar src={person.picture} size="100" round />
//           <h2 className="text-xl font-semibold mt-2">{person.name}</h2>

//           {isEditing && index === editedIndex ? (
//             <>
//               <input
//                 className="border rounded px-2 py-1"
//                 type="text"
//                 value={editedPerson.name}
//                 onChange={(e) => handleChange('name', e.target.value)}
//               />
//               <input
//                 className="border rounded px-2 py-1 ml-2"
//                 type="number"
//                 value={editedPerson.age}
//                 onChange={(e) => handleChange('age', e.target.value)}
//               />
//               <input
//                 className="border rounded px-2 py-1 ml-2"
//                 type="text"
//                 value={editedPerson.gender}
//                 onChange={(e) => handleChange('gender', e.target.value)}
//               />
//               <input
//                 className="border rounded px-2 py-1 ml-2"
//                 type="text"
//                 value={editedPerson.country}
//                 onChange={(e) => handleChange('country', e.target.value)}
//               />
//               <textarea
//                 className="border rounded px-2 py-1 ml-2"
//                 value={editedPerson.description}
//                 onChange={(e) => handleChange('description', e.target.value)}
//               />
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded ml-2"
//                 onClick={handleSave}
//               >
//                 Save
//               </button>
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <>
//               <p>Age: {person.age}</p>
//               <p>Gender: {person.gender}</p>
//               <p>Country: {person.country}</p>
//               <p>Description: {person.description}</p>
//               <button
//                 className="bg-yellow-500 text-white px-4 py-2 rounded ml-2"
//                 onClick={() => handleEdit(index)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded ml-2"
//                 onClick={() => handleDelete(index)}
//               >
//                 Delete
//               </button>
//             </>
//           )}
//         </>
//       )}
//     </div>
//   );

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center flex-col">
//       {data.map((person, index) => renderDetails(person, index))}

//       {showDeleteConfirmation && (
//         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
//           <p className="text-gray-800">Are you sure you want to delete?</p>
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded mr-2"
//             onClick={confirmDelete}
//           >
//             Delete
//           </button>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//             onClick={cancelDelete}
//           >
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// App.js
// import React, { useState } from 'react';
// import PersonDetails from './components/projectsDemo/PersonDetails';

// function App() {
//   const initialData = [
//     {
//       name: 'John Doe',
//       picture: 'https://placekitten.com/200/200',
//       age: 30,
//       gender: 'Male',
//       country: 'USA',
//       description: 'A description about John Doe.',
//       isOpen: false,
//     },
//     // {
//     //   name: 'Jane Smith',
//     //   picture: 'https://placekitten.com/201/201',
//     //   age: 25,
//     //   gender: 'Female',
//     //   country: 'Canada',
//     //   description: 'A description about Jane Smith.',
//     //   isOpen: false,
//     // },
//     // {
//     //   name: 'Bob Johnson',
//     //   picture: 'https://placekitten.com/202/202',
//     //   age: 35,
//     //   gender: 'Male',
//     //   country: 'UK',
//     //   description: 'A description about Bob Johnson.',
//     //   isOpen: false,
//     // },
//     // {
//     //   name: 'Alice Williams',
//     //   picture: 'https://placekitten.com/203/203',
//     //   age: 28,
//     //   gender: 'Female',
//     //   country: 'Australia',
//     //   description: 'A description about Alice Williams.',
//     //   isOpen: false,
//     // },
//     // {
//     //   name: 'Charlie Brown',
//     //   picture: 'https://placekitten.com/204/204',
//     //   age: 32,
//     //   gender: 'Male',
//     //   country: 'Germany',
//     //   description: 'A description about Charlie Brown.',
//     //   isOpen: false,
//     // },
//   ];

//   const [data, setData] = useState(initialData);

//   const handleToggle = (index) => {
//     const updatedData = [...data];
//     updatedData[index].isOpen = !updatedData[index].isOpen;
//     setData(updatedData);
//   };

//   const handleEdit = (index, editedPerson) => {
//     const updatedData = [...data];
//     updatedData[index] = editedPerson;
//     setData(updatedData);
//   };

//   const handleDelete = (index) => {
//     const updatedData = [...data];
//     updatedData.splice(index, 1);
//     setData(updatedData);
//   };

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
//       {data.map((person, index) => (
//         <PersonDetails
//           key={index}
//           person={person}
//           onToggle={() => handleToggle(index)}
//           onEdit={(editedPerson) => handleEdit(index, editedPerson)}
//           onDelete={() => handleDelete(index)}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

///// 3333333333333333333333333333333333333

// import React, { useState } from 'react';
// import PersonDetails from './components/projectsDemo/PersonDetails';

// function App() {
//   const initialData = [
//     {
//       name: 'John Doe',
//       age: 30,
//       gender: 'Male',
//       country: 'USA',
//       description: 'A software developer',
//       isOpen: false,
//       picture: 'https://example.com/john.jpg',
//     },
//     // Add more initial data as needed
//   ];

//   const [data, setData] = useState(initialData);
//   const [deleteIndex, setDeleteIndex] = useState(null);

//   const handleToggle = (index) => {
//     const updatedData = [...data];
//     updatedData[index].isOpen = !updatedData[index].isOpen;
//     setData(updatedData);
//   };

//   const handleEdit = (editedPerson) => {
//     const updatedData = [...data];
//     const index = updatedData.findIndex((person) => person.name === editedPerson.name);
//     updatedData[index] = editedPerson;
//     setData(updatedData);
//   };

//   const handleDelete = (index) => {
//     setDeleteIndex(index);
//   };

//   const handleConfirmDelete = () => {
//     if (deleteIndex !== null) {
//       const updatedData = [...data];
//       updatedData.splice(deleteIndex, 1);
//       setData(updatedData);
//       setDeleteIndex(null);
//     }
//   };

//   const handleCancelDelete = () => {
//     setDeleteIndex(null);
//   };

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
//       {data.map((person, index) => (
//         <PersonDetails
//           key={index}
//           person={person}
//           onToggle={() => handleToggle(index)}
//           onEdit={(editedPerson) => handleEdit(editedPerson)}
//           onDelete={() => handleDelete(index)}
//         />
//       ))}

//       {deleteIndex !== null && (
//         <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded shadow-lg text-center">
//             <p className="text-xl font-semibold mb-4">Are you sure you want to delete?</p>
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded mr-2"
//               onClick={handleConfirmDelete}
//             >
//               Delete
//             </button>
//             <button
//               className="bg-gray-500 text-white px-4 py-2 rounded"
//               onClick={handleCancelDelete}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import Avatar from 'react-avatar';
// import 'tailwindcss/tailwind.css';

// function App() {
//   const initialData = [
//     {
//       name: 'John Doe',
//       picture: 'https://placekitten.com/200/200',
//       age: 30,
//       gender: 'Male',
//       country: 'USA',
//       description: 'A description about John Doe.',
//       isOpen: false,
//     },
    // {
    //   name: 'Jane Smith',
    //   picture: 'https://placekitten.com/201/201',
    //   age: 25,
    //   gender: 'Female',
    //   country: 'Canada',
    //   description: 'A description about Jane Smith.',
    //   isOpen: false,
    // },
    // {
    //   name: 'Bob Johnson',
    //   picture: 'https://placekitten.com/202/202',
    //   age: 35,
    //   gender: 'Male',
    //   country: 'UK',
    //   description: 'A description about Bob Johnson.',
    //   isOpen: false,
    // },
    // {
    //   name: 'Alice Williams',
    //   picture: 'https://placekitten.com/203/203',
    //   age: 28,
    //   gender: 'Female',
    //   country: 'Australia',
    //   description: 'A description about Alice Williams.',
    //   isOpen: false,
    // },
    // {
    //   name: 'Charlie Brown',
    //   picture: 'https://placekitten.com/204/204',
    //   age: 32,
    //   gender: 'Male',
    //   country: 'Germany',
    //   description: 'A description about Charlie Brown.',
    //   isOpen: false,
    // },
  //];

//   const [data, setData] = useState(initialData);
//   const [isEditing, setIsEditing] = useState(false);
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [editedIndex, setEditedIndex] = useState(null);
//   const [editedPerson, setEditedPerson] = useState({});

//   const handleEdit = (index) => {
//     setEditedIndex(index);
//     setEditedPerson({ ...data[index] });
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     const updatedData = [...data];
//     updatedData[editedIndex] = editedPerson;
//     setData(updatedData);

//     setIsEditing(false);
//     setEditedIndex(null);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditedIndex(null);
//   };

//   const handleDelete = (index) => {
//     setEditedIndex(index);
//     setShowDeleteConfirmation(true);
//   };

//   const confirmDelete = () => {
//     const updatedData = [...data];
//     updatedData.splice(editedIndex, 1);
//     setData(updatedData);

//     setShowDeleteConfirmation(false);
//     setEditedIndex(null);
//   };

//   const cancelDelete = () => {
//     setShowDeleteConfirmation(false);
//     setEditedIndex(null);
//   };

//   const handleChange = (field, value) => {
//     setEditedPerson((prev) => ({ ...prev, [field]: value }));
//   };

//   const handlePersonToggle = (index) => {
//     const updatedData = [...data];
//     updatedData[index].isOpen = !updatedData[index].isOpen;
//     setData(updatedData);
//   };

//   const renderDetails = (person, index) => (
//     <div key={index} className="mt-4">
//       <button
//         className={`bg-blue-500 text-white px-4 py-2 rounded ${person.isOpen ? 'mb-2' : ''}`}
//         onClick={() => handlePersonToggle(index)}
//       >
//         {person.isOpen ? 'Close' : 'Open'} Details for {person.name}
//       </button>

//       {person.isOpen && (
//         <>
//           <Avatar src={person.picture} size="100" round />
//           <h2 className="text-xl font-semibold mt-2">{person.name}</h2>

//           {isEditing && index === editedIndex ? (
//             <>
//               <input
//                 className="border rounded px-2 py-1"
//                 type="text"
//                 value={editedPerson.name}
//                 onChange={(e) => handleChange('name', e.target.value)}
//               />
//               <input
//                 className="border rounded px-2 py-1 ml-2"
//                 type="number"
//                 value={editedPerson.age}
//                 onChange={(e) => handleChange('age', e.target.value)}
//               />
//               <input
//                 className="border rounded px-2 py-1 ml-2"
//                 type="text"
//                 value={editedPerson.gender}
//                 onChange={(e) => handleChange('gender', e.target.value)}
//               />
//               <input
//                 className="border rounded px-2 py-1 ml-2"
//                 type="text"
//                 value={editedPerson.country}
//                 onChange={(e) => handleChange('country', e.target.value)}
//               />
//               <textarea
//                 className="border rounded px-2 py-1 ml-2"
//                 value={editedPerson.description}
//                 onChange={(e) => handleChange('description', e.target.value)}
//               />
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded ml-2"
//                 onClick={handleSave}
//               >
//                 Save
//               </button>
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <>
//               <p>Age: {person.age}</p>
//               <p>Gender: {person.gender}</p>
//               <p>Country: {person.country}</p>
//               <p>Description: {person.description}</p>
//               <button
//                 className="bg-yellow-500 text-white px-4 py-2 rounded ml-2"
//                 onClick={() => handleEdit(index)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded ml-2"
//                 onClick={() => handleDelete(index)}
//               >
//                 Delete
//               </button>
//             </>
//           )}
//         </>
//       )}
//     </div>
//   );

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
//       {data.map((person, index) => renderDetails(person, index))}

//       {showDeleteConfirmation && (
//         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
//           <p className="text-gray-800">Are you sure you want to delete?</p>
//           <button
//             className="bg-red-500 text-white px-4 py-2 rounded mr-2"
//             onClick={confirmDelete}
//           >
//             Delete
//           </button>
//           <button
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//             onClick={cancelDelete}
//           >
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

const App = () => {
  const initialData = [
    {
      name: 'John Doe',
      picture: 'https://placekitten.com/200/200',
      age: 30,
      gender: 'Male',
      country: 'USA',
      description: 'A description about John Doe.',
      isOpen: false,
    },
    // {
    //   name: 'Jane Smith',
    //   picture: 'https://placekitten.com/201/201',
    //   age: 25,
    //   gender: 'Female',
    //   country: 'Canada',
    //   description: 'A description about Jane Smith.',
    //   isOpen: false,
    // },
    // {
    //   name: 'Bob Johnson',
    //   picture: 'https://placekitten.com/202/202',
    //   age: 35,
    //   gender: 'Male',
    //   country: 'UK',
    //   description: 'A description about Bob Johnson.',
    //   isOpen: false,
    // },
    // {
    //   name: 'Alice Williams',
    //   picture: 'https://placekitten.com/203/203',
    //   age: 28,
    //   gender: 'Female',
    //   country: 'Australia',
    //   description: 'A description about Alice Williams.',
    //   isOpen: false,
    // },
    // {
    //   name: 'Charlie Brown',
    //   picture: 'https://placekitten.com/204/204',
    //   age: 32,
    //   gender: 'Male',
    //   country: 'Germany',
    //   description: 'A description about Charlie Brown.',
    //   isOpen: false,
    // },
  ];

  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedPerson, setEditedPerson] = useState({});

  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditedPerson({ ...data[index] });
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedData = [...data];
    updatedData[editedIndex] = editedPerson;
    setData(updatedData);

    setIsEditing(false);
    setEditedIndex(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedIndex(null);
  };

  const handleDelete = (index) => {
    setEditedIndex(index);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    const updatedData = [...data];
    updatedData.splice(editedIndex, 1);
    setData(updatedData);

    setShowDeleteConfirmation(false);
    setEditedIndex(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setEditedIndex(null);
  };

  const handleChange = (field, value) => {
    setEditedPerson((prev) => ({ ...prev, [field]: value }));
  };

  const handlePersonToggle = (index) => {
    const updatedData = [...data];
    updatedData[index].isOpen = !updatedData[index].isOpen;
    setData(updatedData);
  };

  const renderDetails = (person, index) => (
    <PersonDetails
      key={index}
      person={person}
      index={index}
      isEditing={isEditing}
      editedIndex={editedIndex}
      editedPerson={editedPerson}
      onPersonToggle={handlePersonToggle}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onSave={handleSave}
      onCancel={handleCancel}
      onChange={handleChange}
    />
  );

  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
      {data.map((person, index) => renderDetails(person, index))}

      {showDeleteConfirmation && (
        <DeleteConfirmation
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default App;