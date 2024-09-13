import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/efc5da93-cef1-4881-9813-e95c33163397-aeroir.jpg",
  "https://utfs.io/f/0b2442b7-5e8b-4d02-83bd-9844f1baf378-4umiw.jpg",
  "https://utfs.io/f/2a6fd625-1d2b-44ee-838a-146727543f74-4vxsn0.jpg",
  "https://utfs.io/f/ed322da8-3d72-4762-abb6-99b76745d963-aivh0j.jpg",
  "https://utfs.io/f/52027fa2-06fd-40a4-9f89-d021dc58052c-d5xwad.jpg",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
