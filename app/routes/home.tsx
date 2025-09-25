import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router RSC App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function ServerComponent() {
  return <Welcome />;
}
