const { handleSuccessResponse } = require("../utility/handleResponse");
const {
  findById,
  updatById,
  findSortPaginationCount,
} = require("../dao/common.dao");
const { Op } = require("sequelize");
const {
  convertPriceToRequiredCurrency,
} = require("../currencyLayer/currencyApis");
const { makePageObject, getSort } = require("../helper/sortSearchPagination");
const { PRODUCT_MODEL_NAME } = require("../constant/dbModelName");
const {
  PRODUCTS_VIEW_FETCHED,
  PRODUCT_FETCHED,
} = require("../constant/sucessMessage");

const getProduct = async (req, res, next) => {
  try {
    let { id, currency } = req.query;
    if(!currency){
      currency = "USD";
    }
    const resp = await findById(id, PRODUCT_MODEL_NAME);
    if (!resp["productViewed"]) {
      resp["productViewed"] = 1;
    } else {
      resp["productViewed"] = resp["productViewed"] + 1;
    }
    const convertedPrice = await convertPriceToRequiredCurrency(
      currency == "USD" ? "CAD" :"USD",
      currency,
      resp["price"]
    );
    resp["price"] = convertedPrice;
    await updatById(
      id,
      { productViewed: resp["productViewed"] },
      PRODUCT_MODEL_NAME
    );
    return handleSuccessResponse(200, res, resp, PRODUCT_FETCHED);
  } catch (err) {
    next(err);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const { query } = req;
    const pageInfo = makePageObject(query);
    const sort = getSort();
    const option = {
      productViewed: {
        [Op.gt]: 0,
      },
    };
    const resp = await findSortPaginationCount(
      pageInfo,
      sort,
      option,
      PRODUCT_MODEL_NAME
    );
    return handleSuccessResponse(200, res, resp, PRODUCTS_VIEW_FETCHED);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProduct,
  getProducts,
};
