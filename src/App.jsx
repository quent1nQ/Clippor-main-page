import logoUrl from '../assets/logo/icon1024.png';
import heroUrl from '../assets/images/macbook-hero.png';
import { privacyHtml } from './privacyContent.js';
import './styles.css';

const APP_STORE_URL = 'https://apps.apple.com/app/id6762117514';
const baseUrl = import.meta.env.BASE_URL;
const privacyUrl = `${baseUrl}privacy.html`;
const homeUrl = baseUrl;

function HomePage() {
  return (
    <div className="page-shell">
      <div className="page-glow glow-left" />
      <div className="page-glow glow-right" />

      <header className="topbar">
        <div className="brand-lockup">
          <img src={logoUrl} alt="Clippor logo" className="brand-logo" />
          <span className="brand-name">Clippor</span>
        </div>
        <nav className="topbar-nav" aria-label="主导航">
          <span className="topbar-note">重新定义 macOS 剪贴板体验</span>
          <a className="topbar-store-link" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            App Store 下载
          </a>
          <a href={privacyUrl}>隐私政策</a>
        </nav>
      </header>

      <main className="hero">
        <p className="eyebrow">为安静、专注的工作流而设计</p>
        <h1 className="hero-title" aria-label="An ECO Way to Copy and Paste">
          <span>An ECO Way</span>
          <span>to Copy &amp; Paste</span>
        </h1>
        <p className="hero-copy">
          一种更克制、更优雅的 Mac 剪贴板方式，让复制过的内容始终清晰可见、随时可找、触手可及。
        </p>
        <div className="hero-actions">
          <a className="primary-action" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            立即体验
          </a>
          <a className="secondary-action" href={privacyUrl}>
            查看隐私政策
          </a>
        </div>

        <div className="hero-visual-wrap">
          <div className="hero-halo" />
          <img
            src={heroUrl}
            alt="展示 Clippor 应用界面的 MacBook 示意图"
            className="hero-visual"
          />
        </div>

        <section className="feature-strip" aria-label="产品亮点">
          <article className="feature-card">
            <span className="feature-title">原生气质</span>
            <p>贴合 macOS 习惯，轻盈、自然、毫不突兀。</p>
          </article>
          <article className="feature-card">
            <span className="feature-title">快速找回</span>
            <p>通过搜索和可视化历史，迅速回到你刚刚复制的内容。</p>
          </article>
          <article className="feature-card">
            <span className="feature-title">克制设计</span>
            <p>保持专注，不喧闹，却在需要时恰到好处地出现。</p>
          </article>
        </section>
      </main>

      <footer className="footer">
        <a className="footer-store-link" href={APP_STORE_URL} target="_blank" rel="noreferrer">
          前往 Mac App Store 下载
        </a>
        <div className="footer-links">
          <a href={privacyUrl}>隐私政策</a>
          <a href="https://github.com/quent1nQ/clippor" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-top">
        <a className="back-link" href={homeUrl}>
          ← 返回首页
        </a>
      </div>
      <div dangerouslySetInnerHTML={{ __html: privacyHtml }} />
    </main>
  );
}

export default function App() {
  const path = window.location.pathname;
  return path.endsWith('/privacy.html') ? <PrivacyPage /> : <HomePage />;
}
