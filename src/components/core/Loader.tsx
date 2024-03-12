export default function Loader({ visible }: { visible: boolean }) {
  return (
    <div
      id="loading-wrapper"
      className={`absolute z-[9999] bg-light ${visible ? "block" : "hidden"}`}
    >
      <div id="loading-text">LOADING</div>
      <div id="loading-content"></div>
    </div>
  );
}
