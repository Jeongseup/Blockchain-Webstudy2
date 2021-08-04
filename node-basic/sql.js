module.exports = {
  list: {
    query: "select * from t_person",
    // query 랑 qurey랑 헷갈리지 말것 !
  },
  list2: {
    query: "select * from t_person",
    // query 랑 qurey랑 헷갈리지 말것 !
  },

  createPerson: {
    query: "insert into t_person set ?", //insert into t_person set first_name='john3' ...
  },
  deletePerson: {
    query: "delete from t_person where id = ?", //insert into t_person set first_name='john3' ...
  },
  updatePerson: {
    query: "update t_person set ? where id = ?", // 첫 param이 첫 ?로,, 두 번째 param이 두번째 ?로 들어온다.
  },
};
