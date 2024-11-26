
import TextareaAutosize from 'react-textarea-autosize';

const StyledTextarea = () => {
  return (
    <div>
      <h3>Styled Auto-Resizing Textarea</h3>
      <TextareaAutosize
        placeholder="Type something..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          outline: 'none',
          resize: 'none',
        }}
      />
    </div>
  );
};

export default StyledTextarea;
