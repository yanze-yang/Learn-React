import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <div>
        <h1>Fundamentals</h1>
        <div>
          <Link href="fundamentals/lifecycle">
            <a>- LifeCycle Metheds</a>
          </Link>
        </div>
        <div>
          <Link href="fundamentals/fragment">
            <a>- Fragement</a>
          </Link>
        </div>
        <div>
          <Link href="fundamentals/pure-components">
            <a>- Pure Component</a>
          </Link>
        </div>
        <div>
          <Link href="fundamentals/memo-components">
            <a>- Memo Component</a>
          </Link>
        </div>
        <div>
          <Link href="fundamentals/refs-forwarding-refs">
            <a>- Forwarding Refs</a>
          </Link>
        </div>
      </div>
      <div>
        <h1>Advanced Topics</h1>
        <Link href="/advanced/useMemo">
          <a>- useMemo()</a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
