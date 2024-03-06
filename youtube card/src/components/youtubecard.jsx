export function YoutubCard(props) {
  return (
    <>
      <div className="  flex-col justify-center text-fuchsia-50 p-2 rounded-lg">
        <div>
          <img
            src={props.image}
            className=" bg-cover object-cover rounded-md"
          ></img>
        </div>
        <div>
          <div className="grid grid-cols-10 p-2S">
            <div className="col-span-3 p-3">
              <img className="rounded-full" src={props.channelImage} alt="" />
            </div>
            <div className="col-span-7 ">
              <div className="font-medium">
                titleBest Restaurant Challenges (Mashup) | Impractical Jokers |
                truTV
              </div>
              <div className=" text-gray-400 flex">
                <div>truTV</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 21"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>
              <div className=" text-gray-400"> 838k views . 6 months ago</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
