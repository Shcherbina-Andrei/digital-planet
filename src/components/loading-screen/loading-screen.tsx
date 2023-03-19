import './loading-screen.css';

function LoadingScreen() {
  return (
    <div className="container">
      <span className="spinner spinner--quarter"></span>
      <span className="visually-hidden">LoadingScreen</span>
    </div>
  );
}

export default LoadingScreen;
