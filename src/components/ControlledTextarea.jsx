import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const ControlledTextarea = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h3>Controlled Textarea</h3>
      <TextareaAutosize
        value={value}
        onChange={handleChange}
        placeholder="Type here..."
        minRows={3}
      />
      <p>Character Count: {value.length}</p>
    </div>
  );
};

export default ControlledTextarea;
