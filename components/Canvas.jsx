import { Center } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const FR = 1 / 60;
const G = 0.002;

class FireWork {
  constructor({ x, y, r, vx, vy, color }) {
    (this.x = x), (this.y = y);
    this.r = r;
    (this.vx = vx), (this.vy = vy);
    this.color = color;
    this.opacity = 0.8 + Math.random() * 0.5;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += G;
    this.opacity -= FR / 10;
  }
  blown(subfireworks) {
    for (let i = 0; i < 12; i++)
      subfireworks.push(
        new SubFireWork({
          x: this.x,
          y: this.y,
          r: this.r * 0.6,
          vx: Math.random() - 0.15,
          vy: Math.random() - 0.15,
          color: this.color,
        })
      );
  }
}

class SubFireWork {
  constructor({ x, y, r, vx, vy, color }) {
    (this.x = x), (this.y = y);
    this.r = r;
    (this.vx = vx), (this.vy = vy);
    this.color = color;
    this.opacity = 0.3;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.opacity -= FR / 10;
  }
}

function Canvas() {
  const ref = useRef(null);
  let colors = ["white", "red", "blue", "yellow", "cyan", "orange"];
  let fireworks = [];
  let subfireworks = [];

  let draw = (ctx, _F) => {
    fireworks.forEach((e) => {
      ctx.beginPath();
      ctx.fillStyle = e.color;
      ctx.arc(e.x, e.y, e.r, 0, 2 * Math.PI);
      ctx.fill();
    });
    subfireworks.forEach((e) => {
      ctx.beginPath();
      ctx.fillStyle = e.color;
      ctx.arc(e.x, e.y, e.r, 0, 2 * Math.PI);
      ctx.fill();
    });
  };

  let updateFireworks = () => {
    fireworks.forEach((e) => e.update());
    for (let i = 0; i < fireworks.length; i++)
      if (fireworks[i].opacity < 0.1) {
        fireworks[i].blown(subfireworks);
        fireworks.splice(i, 1);
      }
    if (fireworks.length < 10) {
      fireworks.push(
        new FireWork({
          x: 0.3 * 400 + Math.random() * 400 * 0.4,
          y: 400,
          r: 0.01 * 400,
          vx: Math.random() * 0.2 - 0.1,
          vy: -1.1,
          color: colors[Math.ceil(Math.random() * colors.length)],
        })
      );
    }
    subfireworks.forEach((e) => e.update());
    for (let i = 0; i < subfireworks.length; i++)
      if (subfireworks[i].opacity < 0.1) subfireworks.splice(i, 1);
  };

  useEffect(() => {
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");
    let animationFrameID;
    let n = 0;

    const render = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${FR * 3})`;
      ctx.fillRect(0, 0, 400, 400);
      ctx.fillStyle = `rgba(0, 0, 0, ${FR * 3})`;
      ctx.fillRect(0, 0, 400, 400);

      n = (n + FR) / 1;

      draw(ctx, n);
      updateFireworks();
      animationFrameID = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameID);
    };
  }, [draw]);

  return (
    <Center>
      <canvas
        ref={ref}
        width={"400px"}
        height={"400px"}
        style={{ backgroundColor: "black" }}
      />
    </Center>
  );
}

export default Canvas;
