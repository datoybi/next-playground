import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>dashboard</h1>
      <Link href="/auth/login">로그인</Link>
    </div>
  );
}
