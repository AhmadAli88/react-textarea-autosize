
import TextareaAutosize from 'react-textarea-autosize';

const FixedWidthExample = () => {
  return (
    <div>
      <h3>Fixed Width Textarea</h3>
      <TextareaAutosize
        placeholder="Type something..."
        minRows={3}
        style={{ width: '400px' }}
      />
    </div>
  );
};

export default FixedWidthExample;
