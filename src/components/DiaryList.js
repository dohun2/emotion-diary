const DiaryList = ({ diaryList }) => {
  return (
    <div>
      {diaryList.map((e) => (
        <div key={e.id}>{e.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
