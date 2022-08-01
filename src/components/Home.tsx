import { FC } from "gyron";
import { useSelector, useDispatch } from "@gyron/dox";
import { increment } from "@/store/module/counter";

export default FC(() => {
  const { Counter } = useSelector();
  const dispatch = useDispatch();

  return (
    <div>
      <div onClick={() => dispatch(increment())}>
        这是一个累加器的 Demo：{Counter.count}
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
