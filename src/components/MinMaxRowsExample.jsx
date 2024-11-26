
import TextareaAutosize from 'react-textarea-autosize';

const MinMaxRowsExample = () => {
  return (
    <div>
      <h3>Textarea with Min and Max Rows</h3>
      <TextareaAutosize
        placeholder="Type something..."
        minRows={3}
        maxRows={10}
      />
    </div>
  );
};

export default MinMaxRowsExample;
