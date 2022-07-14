// 画像をそれぞれimportします。パスに注意してください。
import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.jpg';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
      {/* overlayはカバー画像の上に透過して表示される背景要素です */}
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            {/* カバー画像 */}
            <div className="profile-thumb" style={{ backgroundImage: `url(${ProfileImage})` }}></div>
            {/* 名前と肩書はみなさんのお名前や肩書を自由に入れてください */}
            <h1 className="title-text">どそ</h1>
            <h3 className="title-text">キャットグルーミング協会　理事</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://twitter.com/QNRq4LSGS0gZP0z">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://github.com/shogokaji">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
