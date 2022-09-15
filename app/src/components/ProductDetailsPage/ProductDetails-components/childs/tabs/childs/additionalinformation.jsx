import { checkmanuals, isAdditionalInfo } from '../../../../common';

const AdditionalInfo = ({ product }) => {
  const viewManuals = (type, id) => {
    if (type === 'Tour') {
      return displayAdditionalContent(type, id, true);
    }
    if (isAdditionalInfo(type)) {
      return displayAdditionalContent(type, id);
    }
  };

  const displayAdditionalContent = (type, id, video = false) => {
    const path = video
      ? 'M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM224 384c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V288c0-17.67 14.33-32 32-32h96c17.67 0 32 14.33 32 32V384zM320 284.9v102.3c0 12.57-13.82 20.23-24.48 13.57L256 376v-80l39.52-24.7C306.2 264.6 320 272.3 320 284.9z'
      : 'M88 304H80V256H88C101.3 256 112 266.7 112 280C112 293.3 101.3 304 88 304zM192 256H200C208.8 256 216 263.2 216 272V336C216 344.8 208.8 352 200 352H192V256zM224 0V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H224zM64 224C55.16 224 48 231.2 48 240V368C48 376.8 55.16 384 64 384C72.84 384 80 376.8 80 368V336H88C118.9 336 144 310.9 144 280C144 249.1 118.9 224 88 224H64zM160 368C160 376.8 167.2 384 176 384H200C226.5 384 248 362.5 248 336V272C248 245.5 226.5 224 200 224H176C167.2 224 160 231.2 160 240V368zM288 224C279.2 224 272 231.2 272 240V368C272 376.8 279.2 384 288 384C296.8 384 304 376.8 304 368V320H336C344.8 320 352 312.8 352 304C352 295.2 344.8 288 336 288H304V256H336C344.8 256 352 248.8 352 240C352 231.2 344.8 224 336 224H288zM256 0L384 128H256V0z';
    return (
      <div className="col-md-4">
        <a className="download-link" target="__blank" href={`https://content.etilize.com/${type}/${id}.pdf`} download>
          <div className="pdf-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d={path} />
            </svg>
          </div>
          <p>{type}</p>
        </a>
      </div>
    );
  };

  return (
    <>
      {checkmanuals(product.productElements) && (
        <div className="tab-pane" id="gallery-section">
          <div className="row mb-4">
            <div className="col-md-6 mb-5">
              {product.productElements.map((element) => viewManuals(element.type, product.productid))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdditionalInfo;
