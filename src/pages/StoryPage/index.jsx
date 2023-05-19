import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./style.css";
import YellowButton from "../../components/YellowButton";

export default function StoryPage() {
  const { state: story } = useLocation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [title, setTitle] = useState("");

  // 제목이 입력되면 버튼 활성화
  useEffect(() => {
    if (title.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [title.length]);

  const onClick = () => {
    // 완성된 동화를 다음 화면에 전달
    navigate("/drawing", { state: { title, story } });
  };

  return (
    <div className="StoryPage center">
      <div className="StoryPage__title">
        <img className="title__img" src="logo_no_text.png" alt="토킹 로고" />
        <div className="title__text">
          <p className="title__p">이야기를 완성했어!</p>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="title__input"
            type="text"
            placeholder="이야기에 어울리는 제목을 지어줄래?"
          />
        </div>
      </div>
      <p className="StoryPage__story">{story}</p>
      <Link to={"/"}>
        <YellowButton
          onClick={onClick}
          disabled={disabled}
          text="이제 그림을 그려보자"
        />
      </Link>
    </div>
  );
}
