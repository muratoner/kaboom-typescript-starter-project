import { Comp, GameObj } from "kaboom";
import k from "./kaboomCtx";

const titleComps : Array<Comp> = [
  k.text("Hello World!", {font: "sinko"}),
  k.pos(200,100),
  k.scale(4),
];

function enableFullscreen() {
  onKeyPress("f", () => {
    fullscreen(!isFullscreen())
  });
}

k.scene("mainScene", async () => {
  enableFullscreen(); //fullscreen is scoped by scene. You need this if you want your players to be able to go fullscreen on this scene.
  
  k.add(titleComps);
  
  await loadBean(); // You can load assets within the scene using async/await
  const bean : GameObj = k.add([
    k.sprite("bean"),
    k.pos(50, 200),
  ])

  k.add([
    k.text("move with arrow keys", {font: "sinko"}),
    k.pos(k.center()),
    k.origin("center"),
    k.scale(2),
  ])

  k.add([
    k.text("Press f to go Fullscreen", {font: "sinko"}),
    k.pos(10,20),
    k.scale(2),
  ])

  const SPEED = 500;
  k.onKeyDown("left", () => bean.move(-SPEED,0));
  k.onKeyDown("right", () => bean.move(SPEED, 0));
  k.onKeyDown("up", () => bean.move(0, -SPEED));
  k.onKeyDown("down", () => bean.move(0, SPEED));
});

k.go("mainScene");