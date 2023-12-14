import Avatar from "react-avatar";
import DisplayDetails from "./DisplayDetails";
import EditDetails from "./EditDetails";

const PersonDetails = ({
    person,
    index,
    isEditing,
    editedIndex,
    editedPerson,
    onPersonToggle,
    onEdit,
    onDelete,
    onSave,
    onCancel,
    onChange,
  }) => (
    <div key={index} className="mt-4 relative">
     <div className="border-[2px] p-6 rounded " >
      <div
        className={` flex justify-center items-center rounded ${person.isOpen ? 'mb-2' : ''}`}
       
      >
        {/* <Avatar src={person.picture} size="40" className="mr-4 " round /> */}
        <img src={person.picture} alt="Avatar" width="40" height="40" className="mr-4 rounded-full"/>
        <h1 className="md:ml-8 ml-7">{person.name}</h1> <span className="ml-32 cursor-pointer"  onClick={() => onPersonToggle(index)} >{person.isOpen ? '^' :'ｖ'}</span> 
      </div>
  
      {person.isOpen && (
        <>
          {isEditing && index === editedIndex ? (
            <EditDetails
              editedPerson={editedPerson}
              onSave={onSave}
              onCancel={onCancel}
              onChange={onChange}
            />
          ) : (
            <DisplayDetails
              person={person}
              onEdit={() => onEdit(index)}
              onDelete={() => onDelete(index)}
            />
          )}
        </>
      )}
      </div>
    </div>
  );
   
  export default PersonDetails;