import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <div>
        <Link href="/advanced/useMemo">
          <a>useMemo()</a>
        </Link>
        <Link href="fundamentals/lifecycle">
          <a>LifeCycle Metheds</a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
