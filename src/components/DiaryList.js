import { useState } from "react";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((e, idx) => (
        <option key={idx} value={e.value}>
          {e.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("latest");

  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return +b.date - +a.date;
      } else {
        return +a.date - +b.date;
      }
    };
    const copyList = JSON.parse(JSON.stringify(diaryList));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };

  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {getProcessedDiaryList().map((e) => (
        <div key={e.id}>{e.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
