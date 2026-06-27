


// function Sidebar() {
//   return (
//     <aside
//       className="
//       w-60
//       border-r
//       border-zinc-800
//       bg-zinc-950
//       p-4
//       flex-shrink-0
//     "
//     >
//       <div>Home</div>
//       <div>Subscriptions</div>
//       <div>Profile</div>
//     </aside>
//   );
// }
// export default Sidebar;

import {
  MdHomeFilled,
  MdOutlineSubscriptions,
  MdOutlineThumbUp,
} from "react-icons/md";

import { FaHistory } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";

import { useQuery } from "@tanstack/react-query";
import { getMySubscriptions } from "../services/subscription-service/SubscriptionService.js";



function Sidebar() {
    
    const {
      data,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["subscriptions"],
      queryFn: getMySubscriptions,
    });

  const mainItems = [

    
    {
      title: "Home",
      icon: MdHomeFilled,
    },
    {
      title: "Subscriptions",
      icon: MdOutlineSubscriptions,
    },
  ];

  const userItems = [
    {
      title: "Your Channel",
      icon: HiUserCircle,
    },
    {
      title: "History",
      icon: FaHistory,
    },
    {
      title: "Liked Videos",
      icon: MdOutlineThumbUp,
    },
  ];

  const subscriptions = data?.data || [];
  return (
    <aside
      className="
        w-60
        border-r
        border-zinc-800
        bg-zinc-950
        p-3
        flex-shrink-0
      "
    >
      {/* Main Navigation */}
      <div className="space-y-1">
        {mainItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                items-center
                gap-4
                px-3
                py-2
                rounded-xl
                hover:bg-zinc-800
                cursor-pointer
                transition-colors
              "
            >
              <Icon size={24} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>

      <hr className="my-4 border-zinc-800" />

      {/* Subscriptions */}
      {/* <div>
        <h3 className="px-3 mb-2 text-sm font-semibold text-zinc-400">
          Subscriptions
        </h3>

        <div className="space-y-1">
          {subscriptions.map((channel) => (
            <div
              key={channel.username}
              className="
                flex
                items-center
                gap-3
                px-3
                py-2
                rounded-xl
                hover:bg-zinc-800
                cursor-pointer
                transition-colors
              "
            >
              <img
                src={channel.avatar}
                alt={channel.username}
                className="w-7 h-7 rounded-full"
              />

              <span className="text-sm">
                {channel.username}
              </span>
            </div>
          ))}
        </div>
      </div> */}

        <div>
  <h3 className="px-3 mb-2 text-sm font-semibold text-zinc-400">
    Subscriptions
  </h3>

  {isLoading && (
    <p className="px-3 text-sm text-zinc-500">
      Loading...
    </p>
  )}

  {error && (
    <p className="px-3 text-sm text-red-500">
      Failed to load subscriptions
    </p>
  )}

  {!isLoading && !error && (
    <div className="space-y-1">
      {subscriptions.length > 0 ? (
        subscriptions.map((channel) => (
          <div
            key={channel._id}
            className="
              flex
              items-center
              gap-3
              px-3
              py-2
              rounded-xl
              hover:bg-zinc-800
              cursor-pointer
              transition-colors
            "
          >
            <img
              src={channel.avatar?.url}
              alt={channel.username}
              className="w-7 h-7 rounded-full object-cover"
            />

            <span className="text-sm">
              {channel.username}
            </span>
          </div>
        ))
      ) : (
        <p className="px-3 text-sm text-zinc-500">
          No subscriptions yet
        </p>
      )}
    </div>
  )}
</div>



      <hr className="my-4 border-zinc-800" />

      {/* You Section */}
      <div>
        <h3 className="px-3 mb-2 text-sm font-semibold text-zinc-400">
          You
        </h3>

        <div className="space-y-1">
          {userItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex
                  items-center
                  gap-4
                  px-3
                  py-2
                  rounded-xl
                  hover:bg-zinc-800
                  cursor-pointer
                  transition-colors
                "
              >
                <Icon size={24} />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;