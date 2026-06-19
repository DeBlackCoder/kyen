import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  tag: string;
  price: string;
  href: string;
  img: string;
}

export default function ProductCard({
  name,
  tag,
  price,
  href,
  img,
}: ProductCardProps) {
  return (
    <article className="flex flex-col border border-gray-100 rounded overflow-hidden hover:shadow-md transition-shadow group">
      {/* Product image */}
      <div className="relative h-36 bg-gray-50">
        <Image
          src={img}
          alt={name}
          fill
          className="object-contain p-2"
        />
      </div>
      {/* Info */}
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <span className="text-[10px] text-gray-400 uppercase tracking-wider">
          {tag}
        </span>
        <Link
          href={href}
          className="text-xs font-semibold text-gray-800 hover:text-black leading-tight group-hover:underline"
        >
          {name}
        </Link>
        <p className="text-xs font-bold text-gray-700">{price}</p>
        <button
          type="button"
          className="mt-auto text-[10px] font-semibold border border-gray-800 text-gray-800 py-1.5 px-2 rounded hover:bg-gray-800 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-1"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}
