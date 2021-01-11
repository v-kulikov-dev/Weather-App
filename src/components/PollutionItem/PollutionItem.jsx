import './styles.scss';

const PollutionItem = ({ pollution }) => {
  return (
    <div>
      <div className="sul-box-raised-2 pollution-wrapper">
        <div>{pollution.title}</div>
        <div>{pollution.value} μg/m3</div>
      </div>
    </div>
  );
};

export default PollutionItem;
