import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page">
      <section className="card">
        <span className="label">
          LIKELION 14TH · WEEK 29
        </span>

        <h1>CI/CD Practice</h1>

        <p>
          GitHub Actions를 이용해
          <br />
          코드 검증과 배포를 자동화해 봅시다.
        </p>

        <div className="version">
          Deployment Version: v1
        </div>

        <button
          onClick={() => setCount((prev) => prev + 1)}
        >
          Click Count: {count}
        </button>
      </section>
    </main>
  );
}

export default App;