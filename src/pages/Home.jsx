import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-rose-50 to-white text-gray-700 p-4 font-sans">
      <div className="max-w-md mx-auto px-2 flex flex-col items-center justify-center min-h-screen gap-16">
        <h1 className="text-2xl font-[cursive] text-center">
          Здравей, Еми!
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <NavItem
            to="/purchases"
            iconPath={`${import.meta.env.BASE_URL}icons/shopping-bag.svg`}
            label="Покупки"
          />
          <NavItem
            to="/monthly"
            iconPath={`${import.meta.env.BASE_URL}icons/calendar.svg`}
            label="Месечни покупки"
          />
          <NavItem
            to="/notes"
            iconPath={`${import.meta.env.BASE_URL}icons/note.svg`}
            label="Бележки"
          />
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, iconPath, label }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center w-24">
      <Link
        to={to}
        className="w-24 h-24 rounded-xl bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
      >
        <img
          src={iconPath}
          alt={label}
          className="w-full h-full p-4 object-contain"
        />
      </Link>
      <span className="text-xs text-gray-500 leading-tight">{label}</span>
    </div>
  );
}

export default Home;
