export default function Navbar() {
  return (
    <nav className="bg-[#1b1b2f80] flex items-center justify-center sticky top-0 h-[64px] lg:h-[80px] backdrop-blur-[11px] z-50">
      <div className="flex items-center justify-between w-[358px] md:w-[755px] lg:w-[1000px] xl:w-[1270px] ">
        <div className="flex items-center space-x-2">
          <span className="text-xl lg:text-3xl font-semibold">
            <span className="text-[#FFFFFF]">Algo</span>
            <span className="text-[#889AFF]">zeus</span>
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <a
            className="mr-[16px] lg:mr-[20px]"
            href="https://www.linkedin.com/company/algozeus/"
            target="_blank"
          >
            <svg
              className="shadow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3333 0C22.0406 0 22.7189 0.280951 23.219 0.781048C23.719 1.28115 24 1.95942 24 2.66667V21.3333C24 22.0406 23.719 22.7189 23.219 23.219C22.7189 23.719 22.0406 24 21.3333 24H2.66667C1.95942 24 1.28115 23.719 0.781048 23.219C0.280951 22.7189 0 22.0406 0 21.3333V2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H21.3333ZM20.6667 20.6667V13.6C20.6667 12.4472 20.2087 11.3416 19.3936 10.5264C18.5784 9.71128 17.4728 9.25333 16.32 9.25333C15.1867 9.25333 13.8667 9.94667 13.2267 10.9867V9.50667H9.50667V20.6667H13.2267V14.0933C13.2267 13.0667 14.0533 12.2267 15.08 12.2267C15.5751 12.2267 16.0499 12.4233 16.3999 12.7734C16.75 13.1235 16.9467 13.5983 16.9467 14.0933V20.6667H20.6667ZM5.17333 7.41333C5.76742 7.41333 6.33717 7.17733 6.75725 6.75725C7.17733 6.33717 7.41333 5.76742 7.41333 5.17333C7.41333 3.93333 6.41333 2.92 5.17333 2.92C4.57571 2.92 4.00257 3.1574 3.57999 3.57999C3.1574 4.00257 2.92 4.57571 2.92 5.17333C2.92 6.41333 3.93333 7.41333 5.17333 7.41333ZM7.02667 20.6667V9.50667H3.33333V20.6667H7.02667Z"
                fill="inherit"
              />
            </svg>
          </a>
          <a href="https://t.me/algozeus" target="_blank">
            <svg
              className="shadow"
              width="24"
              height="24"
              viewBox="0 0 28 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="inherit"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.3692 0.90662C24.6987 0.767941 25.0593 0.720112 25.4136 0.76811C25.7678 0.816107 26.1027 0.958178 26.3835 1.17953C26.6642 1.40089 26.8804 1.69344 27.0097 2.02673C27.139 2.36002 27.1766 2.72187 27.1185 3.07462L24.0945 21.4173C23.8012 23.1866 21.8599 24.2013 20.2372 23.32C18.8799 22.5826 16.8639 21.4466 15.0505 20.2613C14.1439 19.668 11.3665 17.768 11.7079 16.416C12.0012 15.26 16.6679 10.916 19.3345 8.33329C20.3812 7.31862 19.9039 6.73329 18.6679 7.66662C15.5985 9.98395 10.6705 13.508 9.0412 14.5C7.60387 15.3746 6.85453 15.524 5.95853 15.3746C4.32386 15.1026 2.80786 14.6813 1.57053 14.168C-0.10147 13.4746 -0.0201365 11.176 1.5692 10.5066L24.3692 0.90662Z"
              />
            </svg>
          </a>
          <div>
            <a
              href="https://app.enzyme.finance/vault/0x76a92d05ce8f5346de5851ccf0ced82af0f4c8ba"
              target="_blank"
            >
              <button className="bg-gradient-radial from-[#648CF5] to-[#2766E1] rounded-[39px] h-[48px] w-[144px] ml-[12px] lg:w-[164px] lg:ml-[48px] text-sm text-white hover:shadow-[0_0_10px_10px_rgba(74,97,218,0.15)] transition-shadow duration-500 ease-in">
                See Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
