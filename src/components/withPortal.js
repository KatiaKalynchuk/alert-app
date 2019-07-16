import ReactDOM from 'react-dom';

export const withPortal = domElement => component => {
  return ReactDOM.createPortal(component, domElement)
};