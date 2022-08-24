const makePageObject = (query) => {
  const pageObject = { skip: 0, limit: 10 };
  if (!query.pageNo || !query.pageSize) {
    query.pageNo = 1;
    query.pageSize = 5;
  }
  const pageNo = parseInt(query.pageNo, 10);
  const pageSize = parseInt(query.pageSize, 10);
  if (isFinite(pageNo) && isFinite(pageSize)) {
    const skip = (pageNo - 1) * pageSize;
    const limit = pageSize;
    pageObject.skip = skip;
    pageObject.limit = limit;
    return pageObject;
  }
  return pageObject;
};
const getSort = () => {
  return ["productViewed", "desc"];
};
module.exports = {
  makePageObject,
  getSort,
};
