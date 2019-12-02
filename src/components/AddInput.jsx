import React {useState} from 'react';

const AddInput = (props) => {
  const [addInput, setAddInput] = useState([])
  return (
     <div>{props.addInput}</div>
    

  );
}

export default AddInput;
