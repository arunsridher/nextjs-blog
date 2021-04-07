// This wont work
import Image from "next/image";
export default function ImageComponent() {
  <Image
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Profile pic"
  />;
}
