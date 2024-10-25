"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={() => router.back()}>닫기</button>
        <p>login</p>
      </div>
    </div>
  );
}
