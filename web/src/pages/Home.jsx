import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";

const Home = () => {
  return (
    <div className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      {/* nav */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E2E4D7] bg-[#F8F6EE]/90 backdrop-blur">
        <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-1">
          {/* logo ogarnac*/}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-[#1F261D]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#78936F] text-white">
              <PawPrint className="h-5 w-5" />
            </span>

            <span>AnimalFind</span>
          </Link>

          <nav className="hidden items-center gap-13 text-sm font-medium text-[#4F5749] md:flex">
            <a
              href="#jak-to-dziala"
              className="transition-colors hover:text-[#1F261D]"
            >
              Jak to działa
            </a>

            <a
              href="#funkcje"
              className="transition-colors hover:text-[#1F261D]"
            >
              Funkcje
            </a>

            <Link to="/demo" className="transition-colors hover:text-[#1F261D]">
              Demo
            </Link>

            <a href="#faq" className="transition-colors hover:text-[#1F261D]">
              FAQ
            </a>
          </nav>

          <a
            href="#cennik"
            className="rounded-full bg-[#78936F] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#6B8564] hover:shadow-lg active:scale-95"
          >
            Zamów przywieszkę
          </a>
        </div>
      </header>

      {/* pierwsza sek */}
      <section className="bg-[#F7F3EB] w-full min-h-dvh flex flex-col justify-start items-center px-6 pt-32 pb-12 md:px-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="font-outfit font-extrabold text-5xl md:text-6xl text-[#1D241B leading-[1.1]">
              Twój pupil zawsze <br />
              <span className="text-[#738F6D]">wróci do domu.</span>
            </h1>

            <p className="text-gray-600 max-w-lg text-lg leading-relaxed font-outfit">
              AnimalFind to wodoodporna przywieszka z chipem NFC i dedykowanym
              profilem dla każdego pupila. Każdy, kto znajdzie Twojego
              zwierzaka, jednym dotknięciem telefonu sprawdzi jego dane, kontakt
              do Ciebie i najważniejsze informacje medyczne.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#738F6D] text-[#F7F3EB] px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:brightness-110 transition"
              >
                Zobacz demo profilu
              </a>

              <a
                href="#jak-to-dziala"
                className="border border-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-[#ADBEA4]/90 transition"
              >
                Jak to działa?
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-gray-300/50 mt-4">
              <div>
                <h4 className="font-bold text-xl">NFC + QR</h4>
                <p className="text-sm text-gray-500">Backup zawsze działa</p>
              </div>
              <div>
                <h4 className="font-bold text-xl">0 baterii</h4>
                <p className="text-sm text-gray-500">
                  Nie musisz polegać<br></br> na zasilaniu
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xl">IP67</h4>
                <p className="text-sm text-gray-500">Odporny na wodę</p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <img
              src="src/assets/dog.png"
              alt="Pies i kot"
              className="rounded-[60px] shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/*  jak to dxiala */}
      <section id="jak-to-dziala" className="bg-[#ECEDE3] py-24 px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#738F6D]">
              Jak to działa
            </p>

            <h2 className="text-4xl md:text-5xl font-outfit font-bold leading-tight text-[#071B1F]">
              Trzy proste kroki do bezpiecznego pupila
            </h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* 1 */}
          <div className="p-8 bg-[#F7F3EB] rounded-3xl drop-shadow-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#EAE8DE] text-[#738F6D] rounded-4xl flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 32 32"
                className="w-7 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(-348,-484)">
                  <path
                    d="m 355,508.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 6 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m 354,486.01367 a 1.0001,1.0001 0 0 0 -0.89453,0.55469 l -3,6.03516 a 1.0001,1.0001 0 0 0 -0.0996,0.42187 1.0001,1.0001 0 0 0 -0.006,0.0234 v 19.96484 a 1.0001,1.0001 0 0 0 1,1 h 26 a 1.0001,1.0001 0 0 0 1,-1 v -19.96484 a 1.0001,1.0001 0 0 0 0,-0.002 1.0001,1.0001 0 0 0 -0.10547,-0.44336 l -3,-6.03516 A 1.0001,1.0001 0 0 0 374,486.01367 Z m 0.61719,2 h 6.20898 l -0.65429,4.03516 h -7.5586 z m 8.23242,0 h 4.30273 l 0.67383,4.03516 h -5.6289 z m 6.33008,0 h 4.20117 l 2.00586,4.03516 h -5.5332 z M 352,494.04883 h 8 v 9.96484 a 1.0001,1.0001 0 0 0 1.70703,0.70703 L 365,501.42773 l 3.29297,3.29297 A 1.0001,1.0001 0 0 0 370,504.01367 v -9.96484 h 6 v 17.96484 h -24 z m 10,0 h 6 v 7.55078 l -2.29297,-2.29297 a 1.0001,1.0001 0 0 0 -1.41406,0 L 362,501.59961 Z"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-outfit font-semibold mb-3">
              1. Zamów przywieszkę
            </h3>
            <p className="text-gray-600 text-sm">
              Wodoodporna przywieszka NFC z unikalnym kodem trafia do Ciebie
              pocztą w 2-3 dni.
            </p>
          </div>

          {/* 2 */}
          <div className="p-8 bg-[#F7F3EB] rounded-3xl drop-shadow-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#EAE8DE] text-[#738F6D] rounded-4xl flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 64 64"
                className="w-7 h-7"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M55.944,51.712l0,4.201l-33.652,-0.027l4.71,-4.174l28.942,0Zm-7.555,-43.712c1.649,0 2.505,0.128 4.752,2.011c2.294,1.921 2.707,3.419 2.803,5.087c0.102,1.795 -0.504,3.976 -2.188,5.681l-31.961,31.961c-0.52,0.475 -0.629,0.45 -0.977,0.553l-10.226,2.557c-1.472,0.299 -2.854,-1.049 -2.55,-2.55l2.557,-10.226c0.1,-0.334 0.133,-0.517 0.553,-0.976c10.696,-10.697 21.195,-21.594 32.09,-32.087c1.421,-1.335 3.497,-2.011 5.147,-2.011Zm-32.375,35.182l-1.477,1.477l-1.566,6.262l6.262,-1.566c0.493,-0.492 0.985,-0.983 1.479,-1.474l-4.698,-4.699Zm30.176,-20.573l-4.802,-4.801l-22.493,22.493l4.712,4.713c7.549,-7.448 15.196,-14.801 22.583,-22.405Zm2.826,-2.936c0.618,-0.648 1.234,-1.298 1.848,-1.951c1.673,-1.826 0.443,-5.454 -2.307,-5.578c-0.056,-0.002 -0.112,-0.002 -0.168,-0.002c-0.861,0.016 -1.699,0.372 -2.312,0.977l-1.807,1.808l4.746,4.746Z"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-outfit font-semibold mb-3">
              2. Wypełnij profil online
            </h3>
            <p className="text-gray-600 text-sm">
              Dodaj zdjęcie, dane zwierzaka, swój kontakt i informacje medyczne.
              Edytuj kiedy chcesz.
            </p>
          </div>

          {/* 3 */}
          <div className="p-8 bg-[#F7F3EB] rounded-3xl drop-shadow-xl border border-gray-100">
            <div className="w-12 h-12 bg-[#EAE8DE] text-[#738F6D] rounded-4xl flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2V3C15 3.55228 14.5523 4 14 4H10C9.44772 4 9 3.55228 9 3V2Z"
                  fill="currentColor"
                />
                <rect
                  x="5.75"
                  y="1.75"
                  width="12.5"
                  height="20.5"
                  rx="1.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 19.5H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-outfit font-semibold mb-3">
              3. Znalazca skanuje NFC
            </h3>
            <p className="text-gray-600 text-sm">
              Wystarczy zbliżyć telefon do przywieszki - od razu otworzy się
              profil z kontaktem do Ciebie.
            </p>
          </div>
        </div>
      </section>

      <section id="funkcje" className="bg-[#F7F3EB] w-full py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#738F6D]">
              FUNKCJE
            </p>

            <h2 className="text-4xl md:text-5xl font-outfit font-bold leading-tight text-[#071B1F]">
              Wszystko, co znalazca powinien wiedzieć
            </h2>

            <p className="mt-5 text-base md:text-lg text-[#555B52]">
              Sam decydujesz, jakie informacje są dostępne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 */}
            <div className="rounded-3xl border border-[#DADDD0] bg-white p-8">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#E2EADB] text-[#738F6D]">
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 32 32"
                  id="Stock_cut"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M28.343,17.48L16,29 L3.657,17.48C1.962,15.898,1,13.684,1,11.365v0C1,6.745,4.745,3,9.365,3h0.17c2.219,0,4.346,0.881,5.915,2.45L16,6l0.55-0.55 C18.119,3.881,20.246,3,22.465,3h0.17C27.255,3,31,6.745,31,11.365v0C31,13.684,30.038,15.898,28.343,17.48z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
              </div>

              <h3 className="mb-3 text-lg font-outfit font-semibold text-[#071B1F]">
                Profil zwierzaka
              </h3>

              <p className="text-sm leading-6 text-[#555B52]">
                Imię, gatunek, rasa, dane medyczne, wiek, znaki szczególne i
                zdjęcia. Edytujesz w każdej chwili.
              </p>
            </div>

            {/* 2 */}
            <div className="rounded-3xl border border-[#DADDD0] bg-white p-8">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#E2EADB] text-[#738F6D]">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mb-3 text-lg font-outfit font-semibold text-[#071B1F]">
                Dane kontaktowe
              </h3>

              <p className="text-sm leading-6 text-[#555B52]">
                Numer telefonu, email, opcjonalne dane zapasowe opiekuna. Bez
                ujawniania adresu domowego.
              </p>
            </div>

            {/* 3 */}
            <div className="rounded-3xl border border-[#DADDD0] bg-white p-8">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#E2EADB] text-[#738F6D]">
                <svg
                  fill="#738F6D"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.048"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M20,5.5H4a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8.5A3,3,0,0,0,20,5.5ZM21,19a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8.5a1,1,0,0,1,1-1H20a1,1,0,0,1,1,1ZM7,3A1,1,0,0,1,8,2h8a1,1,0,0,1,0,2H8A1,1,0,0,1,7,3Zm6,9.75h2v2H13v2H11v-2H9v-2h2v-2h2Z"></path>
                  </g>
                </svg>
              </div>

              <h3 className="mb-3 text-lg font-outfit font-semibold text-[#071B1F]">
                Informacje medyczne
              </h3>

              <p className="text-sm leading-6 text-[#555B52]">
                Alergie, leki, choroby przewlekłe, czy dane weterynacza.
                Krytyczne informacje widoczne od razu.
              </p>
            </div>

            {/* 4 */}
            <div className="rounded-3xl border border-[#DADDD0] bg-white p-8">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#E2EADB] text-[#738F6D]">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 16.9C2 15.5906 2 14.9359 2.29472 14.455C2.45963 14.1859 2.68589 13.9596 2.955 13.7947C3.43594 13.5 4.09063 13.5 5.4 13.5H6.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5V18.6C10.5 19.9094 10.5 20.5641 10.2053 21.045C10.0404 21.3141 9.81411 21.5404 9.545 21.7053C9.06406 22 8.40937 22 7.1 22C5.13594 22 4.15391 22 3.4325 21.5579C3.02884 21.3106 2.68945 20.9712 2.44208 20.5675"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M22 7.1C22 8.40937 22 9.06406 21.7053 9.545C21.5404 9.81411 21.3141 10.0404 21.045 10.2053C20.5641 10.5 19.9094 10.5 18.6 10.5H17.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5V5.4C13.5 4.09063 13.5 3.43594 13.7947 2.955C13.9596 2.68589 14.1859 2.45963 14.455 2.29472C14.9359 2 15.5906 2 16.9 2C18.8641 2 19.8461 2 20.5675 2.44208C20.9712 2.68945 21.3106 3.02884 21.5579 3.4325"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M16.5 6.25C16.5 5.73459 16.5 5.47689 16.6291 5.29493C16.6747 5.23072 16.7307 5.17466 16.7949 5.12911C16.9769 5 17.2346 5 17.75 5C18.2654 5 18.5231 5 18.7051 5.12911C18.7693 5.17466 18.8253 5.23072 18.8709 5.29493C19 5.47689 19 5.73459 19 6.25C19 6.76541 19 7.02311 18.8709 7.20507C18.8253 7.26928 18.7693 7.32534 18.7051 7.37089C18.5231 7.5 18.2654 7.5 17.75 7.5C17.2346 7.5 16.9769 7.5 16.7949 7.37089C16.7307 7.32534 16.6747 7.26928 16.6291 7.20507C16.5 7.02311 16.5 6.76541 16.5 6.25Z"
                    fill="currentColor"
                  />

                  <path
                    d="M12.75 22C12.75 22.4142 13.0858 22.75 13.5 22.75C13.9142 22.75 14.25 22.4142 14.25 22H12.75ZM14.3889 13.8371L14.8055 14.4607L14.8055 14.4607L14.3889 13.8371ZM13.8371 14.3889L13.2135 13.9722L13.2135 13.9722L13.8371 14.3889ZM19 12.75H17V14.25H19V12.75ZM12.75 19V22H14.25V19H12.75ZM17 12.75C16.3134 12.75 15.742 12.7491 15.281 12.796C14.8075 12.8441 14.3682 12.9489 13.9722 13.2135L14.8055 14.4607C14.914 14.3882 15.078 14.3244 15.4328 14.2883C15.8002 14.2509 16.2822 14.25 17 14.25V12.75ZM14.25 17C14.25 16.2822 14.2509 15.8002 14.2883 15.4328C14.3244 15.078 14.3882 14.914 14.4607 14.8055L13.2135 13.9722C12.9489 14.3682 12.8441 14.8075 12.796 15.281C12.7491 15.742 12.75 16.3134 12.75 17H14.25ZM13.9722 13.2135C13.6719 13.4141 13.4141 13.6719 13.2135 13.9722L14.4607 14.8055C14.5519 14.669 14.669 14.5519 14.8055 14.4607L13.9722 13.2135Z"
                    fill="currentColor"
                  />

                  <path
                    d="M22.75 13.5C22.75 13.0858 22.4142 12.75 22 12.75C21.5858 12.75 21.25 13.0858 21.25 13.5H22.75ZM20.7654 21.8478L21.0524 22.5407L21.0524 22.5407L20.7654 21.8478ZM21.8478 20.7654L21.1548 20.4784V20.4784L21.8478 20.7654ZM17 22.75H19V21.25H17V22.75ZM22.75 17V13.5H21.25V17H22.75ZM19 22.75C19.4557 22.75 19.835 22.7504 20.1454 22.7292C20.4625 22.7076 20.762 22.661 21.0524 22.5407L20.4784 21.1548C20.4012 21.1868 20.284 21.2163 20.0433 21.2327C19.7958 21.2496 19.4762 21.25 19 21.25V22.75ZM21.25 19C21.25 19.4762 21.2496 19.7958 21.2327 20.0433C21.2163 20.284 21.1868 20.4012 21.1548 20.4784L22.5407 21.0524C22.661 20.762 22.7076 20.4625 22.7292 20.1454C22.7504 19.835 22.75 19.4557 22.75 19H21.25ZM21.0524 22.5407C21.7262 22.2616 22.2616 21.7262 22.5407 21.0524L21.1548 20.4784C21.028 20.7846 20.7846 21.028 20.4784 21.1549L21.0524 22.5407Z"
                    fill="currentColor"
                  />

                  <path
                    d="M2 7.1C2 5.13594 2 4.15391 2.44208 3.4325C2.68945 3.02884 3.02884 2.68945 3.4325 2.44208C4.15391 2 5.13594 2 7.1 2C8.40937 2 9.06406 2 9.545 2.29472C9.81411 2.45963 10.0404 2.68589 10.2053 2.955C10.5 3.43594 10.5 4.09063 10.5 5.4V6.5C10.5 8.38562 10.5 9.32843 9.91421 9.91421C9.32843 10.5 8.38562 10.5 6.5 10.5H5.4C4.09063 10.5 3.43594 10.5 2.955 10.2053C2.68589 10.0404 2.45963 9.81411 2.29472 9.545C2 9.06406 2 8.40937 2 7.1Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M5 6.25C5 5.73459 5 5.47689 5.12911 5.29493C5.17466 5.23072 5.23072 5.17466 5.29493 5.12911C5.47689 5 5.73459 5 6.25 5C6.76541 5 7.02311 5 7.20507 5.12911C7.26928 5.17466 7.32534 5.23072 7.37089 5.29493C7.5 5.47689 7.5 5.73459 7.5 6.25C7.5 6.76541 7.5 7.02311 7.37089 7.20507C7.32534 7.26928 7.26928 7.32534 7.20507 7.37089C7.02311 7.5 6.76541 7.5 6.25 7.5C5.73459 7.5 5.47689 7.5 5.29493 7.37089C5.23072 7.32534 5.17466 7.26928 5.12911 7.20507C5 7.02311 5 6.76541 5 6.25Z"
                    fill="currentColor"
                  />

                  <path
                    d="M5 17.75C5 17.2346 5 16.9769 5.12911 16.7949C5.17466 16.7307 5.23072 16.6747 5.29493 16.6291C5.47689 16.5 5.73459 16.5 6.25 16.5C6.76541 16.5 7.02311 16.5 7.20507 16.6291C7.26928 16.6747 7.32534 16.7307 7.37089 16.7949C7.5 16.9769 7.5 17.2346 7.5 17.75C7.5 18.2654 7.5 18.5231 7.37089 18.7051C7.32534 18.7693 7.26928 18.8253 7.20507 18.8709C7.02311 19 6.76541 19 6.25 19C5.73459 19 5.47689 19 5.29493 18.8709C5.23072 18.8253 5.17466 18.7693 5.12911 18.7051C5 18.5231 5 18.2654 5 17.75Z"
                    fill="currentColor"
                  />

                  <path
                    d="M16 17.75C16 17.0478 16 16.6967 16.1685 16.4444C16.2415 16.3352 16.3352 16.2415 16.4444 16.1685C16.6967 16 17.0478 16 17.75 16C18.4522 16 18.8033 16 19.0556 16.1685C19.1648 16.2415 19.2585 16.3352 19.3315 16.4444C19.5 16.6967 19.5 17.0478 19.5 17.75C19.5 18.4522 19.5 18.8033 19.3315 19.0556C19.2585 19.1648 19.1648 19.2585 19.0556 19.3315C18.8033 19.5 18.4522 19.5 17.75 19.5C17.0478 19.5 16.6967 19.5 16.4444 19.3315C16.3352 19.2585 16.2415 19.1648 16.1685 19.0556C16 18.8033 16 18.4522 16 17.75Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <h3 className="mb-3 text-lg font-outfit font-semibold text-[#071B1F]">
                QR jako backup
              </h3>

              <p className="text-sm leading-6 text-[#555B52]">
                Każda przywieksza ma też kod QR - działa nawet bez NFC w
                starszych telefonach.
              </p>
            </div>

            {/* 5 */}
            <div className="rounded-3xl border border-[#DADDD0] bg-white p-8">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#E2EADB] text-[#738F6D]">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M8.99999 14C8.99999 13.4477 8.55227 13 7.99999 13C7.4477 13 6.99999 13.4477 6.99999 14C6.99999 15.3574 7.26721 16.7375 8.08236 17.7972C8.93437 18.9048 10.2571 19.5 12 19.5C12.5523 19.5 13 19.0523 13 18.5C13 17.9477 12.5523 17.5 12 17.5C10.7429 17.5 10.0656 17.0952 9.66761 16.5778C9.23276 16.0125 8.99999 15.1426 8.99999 14Z"
                      fill="#738F6D"
                    ></path>{" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.4228 1.54267C12.6513 0.711988 11.348 0.712021 10.5766 1.54273C9.63287 2.55896 7.89116 4.5305 6.37916 6.77881C4.87045 9.02222 3.46953 11.5773 3.49416 14.3526C3.49633 14.5981 3.50939 14.9426 3.55218 15.3536C3.63717 16.17 3.84245 17.278 4.33361 18.4008C4.82693 19.5285 5.61868 20.6923 6.88173 21.5709C8.15052 22.4536 9.82552 23 11.9997 23C14.1739 23 15.8489 22.4536 17.1178 21.5709C18.3808 20.6923 19.1727 19.5286 19.6661 18.4009C20.1573 17.2781 20.3627 16.17 20.4477 15.3536C20.4905 14.9427 20.5036 14.5982 20.5058 14.3527C20.5306 11.5774 19.1293 9.02208 17.6206 6.77875C16.1084 4.53043 14.3666 2.55889 13.4228 1.54267ZM8.03877 7.89491C9.44577 5.80274 11.0797 3.94302 11.9997 2.94942C12.9198 3.94301 14.5539 5.80273 15.961 7.89491C17.2351 9.78932 18.5269 11.9805 18.5059 14.3348C18.5042 14.5268 18.4938 14.8074 18.4585 15.1464C18.3873 15.83 18.2176 16.722 17.8338 17.5992C17.4521 18.4715 16.8689 19.3078 15.9756 19.9291C15.0882 20.5465 13.8256 21 11.9997 21C10.1738 21 8.91129 20.5465 8.02387 19.9291C7.13071 19.3078 6.54754 18.4715 6.16596 17.5992C5.78221 16.722 5.61259 15.8301 5.54142 15.1465C5.50613 14.8074 5.49578 14.5269 5.49408 14.3349C5.4732 11.9806 6.76469 9.78944 8.03877 7.89491Z"
                      fill="#738F6D"
                    ></path>{" "}
                  </g>
                </svg>
              </div>

              <h3 className="mb-3 text-lg font-outfit font-semibold text-[#071B1F]">
                Wodoodporna konstrukcja
              </h3>

              <p className="text-sm leading-6 text-[#555B52]">
                Wytrzymały materiał ABS nie przepuszczający wody. Odporna na
                deszcz, kąpiel, błoto.
              </p>
            </div>

            {/* 6 */}
            <div className="rounded-3xl border border-[#DADDD0] bg-white p-8">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#E2EADB] text-[#738F6D]">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.6 9H20.4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.6 15H20.4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 3C14.1 5.4 15.2 8.4 15.2 12C15.2 15.6 14.1 18.6 12 21C9.9 18.6 8.8 15.6 8.8 12C8.8 8.4 9.9 5.4 12 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mb-3 text-lg font-outfit font-semibold text-[#071B1F]">
                Publiczny profil bez logowania
              </h3>

              <p className="text-sm leading-6 text-[#555B52]">
                Znalazca od razu po zeskanowaniu przywieszki widzi najważniejsze
                informacje - bez instalowania aplikacji i zakładania konta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* stupka ;> */}
      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} AnimalFind
      </footer>
    </div>
  );
};

export default Home;
