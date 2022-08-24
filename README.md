### Coding Assessment

1. # Get All Products By Maximum View Counts 
# URL: http://localhost:8081/api/products
# Aove result will give top 5 maximum views for the product if view count greater then 0
# Custom query param
#  ?pageNo=1&pageSize=1
# Example:  http://localhost:8081/api/products?pageNo=1&pageSize=1
# Aove result will give top 1 result from page number 1 as Pagination (maximum views for the product if view count greater then 0)


2. # Get single Product By Id  
# URL: http://localhost:8081/api/product?id=1
# Aove result will give 1  product  by id 1 this will increment the views count and convert USD price to CAD

# Custom query param
#  ?currency=CAD
# Example:  http://localhost:8081/api/product?currency=CAD
# Above result will convert price to CAD currency