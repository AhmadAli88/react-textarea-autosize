import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const FormExample = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Message submitted: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form with Auto-Resizing Textarea</h3>
      <TextareaAutosize
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        minRows={5}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <button type="submit" style={{ marginTop: '10px' }}>
        Submit
      </button>
    </form>
  );
};

export default FormExample;
