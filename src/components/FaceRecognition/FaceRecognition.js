import './FaceRecognition.css';

const FaceRecognition = ({ boxes = [], imageUrl }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputImage' src={imageUrl} width='500px' height='auto' alt='' />
        {boxes.map((box, i) => {
          return (
            <div
              key={i}
              className='bounding-box'
              style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
