import LargeLoader from '../../common/LargeLoader';

const Loading = ({ product }) => {
  return (
    <div
      className="row"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '70vh',
      }}>
      <div style={{ width: '100px' }}>
        <LargeLoader />
      </div>
    </div>
  );
};

export default Loading;
