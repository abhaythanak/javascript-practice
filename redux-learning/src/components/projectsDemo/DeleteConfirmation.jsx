const DeleteConfirmation = ({ onConfirm, onCancel }) => (
    <div className="flex flex-col border justify-center items-center fixed w-screen h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
      <div className="border p-4 rounded-lg">
        <div className="flex justify-between -mt-2 mb-3">
        <p className="text-gray-800 ">Are you sure you want to delete?</p>
        <span className="cursor-pointer ml-4 font-bold" onClick={onCancel}>x</span>
        </div>
      <div className="mt-5 flex justify-center items-center lg:ml-60">
      <button
        className="bg-gray-500 text-white px-4 py-1 rounded"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button
        className="bg-red-500 text-white px-4 py-1 rounded ml-2"
        onClick={onConfirm}
      >
        Delete
      </button>
      </div>
      </div>
    </div>
  );

  export default DeleteConfirmation;