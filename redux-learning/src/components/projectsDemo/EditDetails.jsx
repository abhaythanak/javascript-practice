import 'tailwindcss/tailwind.css';

// EditDetails Component
const EditDetails = ({ editedPerson, onSave, onCancel, onChange }) => (
  <form className='' >
    <div className="">
    <label className="block -mt-2 md:-ml-5 absolute top-[37px] right-[130px]">
      <input
        className="border rounded-lg px-2 py-1 w-28 "
        type="text"
        value={editedPerson.name}
        onChange={(e) => onChange('name', e.target.value)}
      />
    </label>
    <div className="flex text-center">
    <label className="block mb-2 flex flex-col ">
      Age
      <input
        className="border rounded-lg px-2 py-1 ml-2 w-20 h-8"
        type="number"
        min="0"
        max="99"
        maxLength="2"
        value={editedPerson.age}
        onChange={(e) => onChange('age', e.target.value)}
      />
    </label>
    <label className="block mb-2 flex flex-col mx-4">
      Gender
      <input
        className="border rounded-lg px-2 py-1 ml-2 w-20 h-8"
        type="text"
        value={editedPerson.gender}
        onChange={(e) => onChange('gender', e.target.value)}
      />
    </label>
    <label className="block mb-2 flex flex-col">
      Country
      <input
        className="border rounded-lg px-2 py-1 ml-2 w-20 h-8"
        type="text"
        value={editedPerson.country}
        onChange={(e) => onChange('country', e.target.value)}
      />
    </label>
    </div>
    <label className="block mb-3 flex flex-col justify-center items-center">
      <div className="flex justify-start mr-40">
      <span className=''>Description</span>
      </div>
      <textarea 
        // className="border rounded-lg px-2 py-1 ml-2"
        className="border rounded-lg p-1 py-1 w-[600px] h-36 sm:w-64 ml-2"
        value={editedPerson.description}
        onChange={(e) => onChange('description', e.target.value)}
      />
    </label>
    <div className="flex justify-end">
    <button
      className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2"
      onClick={onSave}
    >
      Save
    </button>
    <button
      className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2"
      onClick={onCancel}
    >
      Cancel
    </button>
    </div>
    </div>
  </form>
);

export default EditDetails;
