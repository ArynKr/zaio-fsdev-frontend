const ModalWrapper = ({ children }) => {

  return (
    <div className="absolute w-full top-0 bottom-0 left-0 bg-[#aaaabb66] grid place-items-center">
      {children}
    </div>
  );
}

export default ModalWrapper;