const VideoTitle = (props) => {
    const {title, overview} = props
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <button className="p-4 px-10 text-lg text-black bg-white rounded-lg hover:bg-opacity-80">▶  Play</button>
      <button className="p-4 px-10 m-2 text-lg text-black bg-white rounded-lg hover:bg-opacity-80 ">More Info</button>
    </div>
  );
};

export default VideoTitle;
