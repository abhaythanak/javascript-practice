import Avatar from 'react-avatar';

const DisplayDetails = ({ person, onEdit, onDelete }) => (
    <>
      <div className="flex gap-16 m-2">
         <p className='flex flex-col'>Age <span>{person.age} Years</span></p>
         <p className='flex flex-col'>Gender <span>{person.gender}</span></p>
         <p className='flex flex-col '>Country <span className=''>{person.country}</span></p>
      </div>
      <p className='flex flex-col my-3 mx-3 w-[300px] h-36 '>
        Description 
        <span className='break-all overflow-y-auto scroll-m-[2px] mt-2 rounded-lg'>{person.description}</span></p>
      <div className="flex justify-end m-3 mb-[-10px]">
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded ml-2"
        onClick={onEdit}
      >
        Edit
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        onClick={onDelete}
      >
        Delete
      </button>
      </div>
    </>
  );
  


  export default DisplayDetails;