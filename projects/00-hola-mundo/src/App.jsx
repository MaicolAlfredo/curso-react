import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true,
  },
  {
    userName: "jonmircha",
    name: "JonMircha",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H",
    isFollowing: false,
  },
  {
    userName: "TMchein",
    name: "Thomas",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, initialIsFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={initialIsFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
