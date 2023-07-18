// IconBurger.tsx
export default function IconBurger({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center ${
        isOpen ? '-rotate-45' : ''
      }`}
    >
      <div
        className={` ${
          isOpen ? '-rotate-90 h-[1px] -translate-y-[1px]' : 'h-[2px]'
        } bg-white w-1/2 rounded transform transition-all duration-300 origin-right delay-75`}
      ></div>
      <div className={`bg-white h-[1px] rounded`}></div>
      <div
        className={`${
          isOpen ? '-rotate-90 h-[1px] translate-y-[1px]' : 'h-[2px]'
        } bg-white w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75`}
      ></div>
    </div>
  )
}
