import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

// const [userData, setUserData] = useState(null);

// useEffect(() => {
//   async function fetchData() {
//     try {
//       const response = await fetch("/api/getUser");
//       const data = await response.json();
//       setUserData(data);
//       console.log("User data:", data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   }

//   fetchData();
// }, []);

export async function GET() {
  try {
    noStore();
    const user = await kv.hgetall("user:me");
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}
