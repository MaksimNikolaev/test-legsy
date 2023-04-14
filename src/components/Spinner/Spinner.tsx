import './Spinner.css'

export const Spinner = () => {
  return (
    <div className="spinner">
        <span className="spinner__animation"></span>
        <span className="spinner__info">Подождите идет загрузка...</span>
    </div>
  );
};