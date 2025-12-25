interface IProps {
  title: string;
}

const PageHeader = ({ title }: IProps) => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center typo-mid-bd-reg text-text-500">
      <span className="">{title}</span>
    </div>
  );
};

export default PageHeader;
