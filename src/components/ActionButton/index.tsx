type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  return (
    <button className="rounded-lg bg-primary-300 px-6 py-2 text-white transition duration-150 hover:scale-105 hover:bg-red-500">
      {children}
    </button>
  );
};

export default ActionButton;
