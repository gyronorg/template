import { FC, useValue } from "gyron";

export default FC(() => {
  const count = useValue(0);

  return (
    <div>
      <div onClick={() => count.value++}>
        这是一个累加器的 Demo：{count.value}
      </div>
      <div>
        <p>相关链接</p>
        <ul>
          <li>
            <span>官方文档：</span>
            <a href="https://gyron.cc/" target="_blank">
              https://gyron.cc/
            </a>
          </li>
          <li>
            <span>聊天交流：</span>
            <a href="https://discord.gg/fETVZtD" target="_blank">
              https://discord.gg/fETVZtD
            </a>
          </li>
          <li>
            <span>Github：</span>
            <a href="https://github.com/gyronorg/core.git" target="_blank">
              https://github.com/gyronorg/core.git
            </a>
          </li>
        </ul>
      </div>
      <img
        src="https://s2.loli.net/2022/06/26/njGZ4zv2Te87mhE.webp"
        alt="reward"
        style={{ width: "260px" }}
      />
    </div>
  );
});
