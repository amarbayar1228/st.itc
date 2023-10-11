const Title = ({ name, size }) => {
  return (
    <section>
      <div className="py-6 font-black text-3xl text-brand-50 flex items-center">
        <div className="w-7 h-7 bg-brand-50 mr-6"></div>
        <div className={size ? "text-lg" : "text-3xl"}>{name}</div>
      </div>
    </section>
  );
};
export default Title;
