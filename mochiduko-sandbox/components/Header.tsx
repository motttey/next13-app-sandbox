import Link from "next/link";

const Header: React.FC = () => {
  const title = 'Mochiduko 2024'
  return (
    <div className="bg-white lg:pb-6">
      <div className="max-w-screen-2xl px-2 md:px-4 mx-auto">
        <header className="flex justify-between items-center py-4">
          <Link href="/" className="header-link" aria-label="logo">
            {title}
          </Link>
        </header>
      </div >
    </div >
  )
};

export default Header;