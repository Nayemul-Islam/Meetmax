import { TbMessageChatbotFilled } from "react-icons/tb";

const Header = () => {
  return (
    <>
      <div className="flex justify-between mt-5">
        <div className="flex items-center gap-1">
          <TbMessageChatbotFilled className="text-blue-500 text-2xl" />
          <p className="text-2xl">Meetmax</p>
        </div>

        <div>
          <select className="select border-gray-200 shadow h-7  text-sm">
            <option disabled selected>
              English (UK)
            </option>

            <option>English (UK)</option>
            <option>English (US)</option>
            <option>বাংলা</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
