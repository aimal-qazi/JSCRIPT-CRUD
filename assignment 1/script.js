// When the button is clicked the div will show

function toshow(formId) {
  forms = document.querySelectorAll(".get");
  for (let i = 0; i < forms.length; i++) {
    forms[i].style.display = "none";
  }
  var byForm = document.getElementById(formId);
  byForm.style.display = "block";
}

// For Adding and Deleting and Editing Vendor

const vendorF = document.getElementById("vendorForm");
const vendorTableBody = document.getElementById("vendorTable");
const vendorArray = [];
vendorF.addEventListener("submit", gettingVendor);

function gettingVendor(event) {
  event.preventDefault();
  const vendorInp = document.getElementById("vendorInp").value;
  const vendorSelect = document.getElementById("pv");
  const vendorObj = {
    vendorName: vendorInp,
  };
  const option = document.createElement("option");
  option.textContent = vendorInp;
  vendorSelect.appendChild(option);
  vendorArray.push(vendorObj);
  showingVendor(vendorObj);
  vendorF.reset();
}

function showingVendor(vendor) {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const editCell = document.createElement("td");
  const deleteCell = document.createElement("td");

  nameCell.textContent = vendor.vendorName;

  const deleteCellbtn = document.createElement("button");
  deleteCellbtn.textContent = "Delete";

  const editCellBtn = document.createElement("button");
  editCellBtn.textContent = "Edit";

  alert(`${vendor.vendorName} is Successfully Added`);

  editCellBtn.addEventListener("click", function () {
    editVendor(row, vendor);
  });

  deleteCellbtn.addEventListener("click", function () {
    deleteVendor(row);
  });

  editCell.appendChild(editCellBtn);
  deleteCell.appendChild(deleteCellbtn);
  row.appendChild(nameCell);
  row.appendChild(editCell);
  row.appendChild(deleteCell);
  vendorTableBody.appendChild(row);
}

function editVendor(row, vendor) {
  const nameCell = row.cells[0];
  const updateName = prompt("Enter vendor name: ", vendor.vendorName);
  nameCell.textContent = updateName;
  vendor.vendorName = updateName;

  const vendorSelect = document.getElementById("pv");
  const options = vendorSelect.options;

  while (options.length > 1) {
    vendorSelect.removeChild(options[1]);
  }

  for (let i = 0; i < vendorArray.length; i++) {
    const option = document.createElement("option");
    option.value = vendorArray[i].vendorName;
    option.textContent = vendorArray[i].vendorName;
    vendorSelect.appendChild(option);
  }

  alert(`${updateName} is successfully saved`);
}

function deleteVendor(vendors) {
  const rowIndex = vendors.rowIndex;
  vendorArray.splice(rowIndex - 1, 1);
  vendorTableBody.removeChild(vendors);
}

// for Adding and Deleting Category

const categoryForm = document.getElementById("categoryForm");
const categoryFormTable = document.getElementById("categoryTable");
const category = [];
categoryForm.addEventListener("submit", addingCategory);

function addingCategory(event) {
  event.preventDefault();
  const categoryInp = document.getElementById("categoryInp").value;
  const categorySelect = document.getElementById("pc");
  const forCat = {
    name: categoryInp,
  };
  const option = document.createElement("option");
  option.textContent = categoryInp;
  categorySelect.appendChild(option);
  category.push(forCat);
  categoryForm.reset();
  showingCategory(forCat);
}

function showingCategory(cate) {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const editCell = document.createElement("td");
  const editCellBtn = document.createElement("button");
  const deleteCell = document.createElement("td");
  const deleteCellBtn = document.createElement("button");

  nameCell.textContent = cate.name;

  alert(`${cate.name} is Successfully Added`);

  editCellBtn.textContent = "Edit";
  editCell.appendChild(editCellBtn);
  editCellBtn.addEventListener("click", function () {
    editCategory(row, cate);
  });

  deleteCellBtn.textContent = "Delete";
  deleteCell.appendChild(deleteCellBtn);
  deleteCellBtn.addEventListener("click", function () {
    deleteCategory(row);
  });

  row.appendChild(nameCell);
  row.appendChild(editCell);
  row.appendChild(deleteCell);
  categoryFormTable.appendChild(row);
}

function editCategory(row, cate) {
  const nameCell = row.cells[0];
  const updateName = prompt("Enter category name: ", cate.name);
  nameCell.textContent = updateName;
  cate.name = updateName;

  const categorySelect = document.getElementById("pc");
  const options = categorySelect.options;

  while (options.length > 1) {
    categorySelect.removeChild(options[1]);
  }

  for (let i = 0; i < category.length; i++) {
    const option = document.createElement("option");
    option.value = category[i].name;
    option.textContent = category[i].name;
    categorySelect.appendChild(option);
  }
}

function deleteCategory(catId) {
  const rowIndex = catId.rowIndex;
  category.splice(rowIndex - 1, 1);
  categoryFormTable.removeChild(catId);
}

// For Adding and Deleting Products

const productForm = document.getElementById("productForm");
const productFormTable = document.getElementById("productTable");
const products = [];
productForm.addEventListener("submit", addingProduct);

function addingProduct(event) {
  event.preventDefault();
  const prodInp = document.getElementById("productInp").value;
  const prodPri = document.getElementById("productPrice").value;
  const prodVS = document.getElementById("pv").value;
  const prodCS = document.getElementById("pc").value;

  const forPro = {
    name: prodInp,
    price: prodPri,
    ven: prodVS,
    cat: prodCS,
  };

  products.push(forPro);
  showingProduct(forPro);
  productForm.reset();
}

function showingProduct(pro) {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const priceCell = document.createElement("td");
  const vendorCell = document.createElement("td");
  const categoryCell = document.createElement("td");
  const editCell = document.createElement("td");
  const editCellBtn = document.createElement("button");
  const deleteCell = document.createElement("td");
  const deleteCellBtn = document.createElement("button");

  editCellBtn.textContent = "Edit";
  editCell.appendChild(editCellBtn);

  deleteCellBtn.textContent = "Delete";
  deleteCell.appendChild(deleteCellBtn);
  deleteCellBtn.addEventListener("click", function () {
    deletingProduct(row);
  });

  nameCell.textContent = pro.name;
  priceCell.textContent = pro.price;
  vendorCell.textContent = pro.ven;
  categoryCell.textContent = pro.cat;

  alert(`${pro.name} is Successfully Added`);

  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(vendorCell);
  row.appendChild(categoryCell);
  row.appendChild(editCell);
  row.appendChild(deleteCell);
  productFormTable.appendChild(row);
}

function deletingProduct(prod) {
  const rowIndex = prod.rowIndex;
  products.splice(rowIndex - 1, 1);
  productFormTable.removeChild(prod);
}

// Showing Product By Range

const rangeForm = document.getElementById("rangeForm");
const rangeTable = document.getElementById("productRangeTable");
let rangeProduct = [];
rangeForm.addEventListener("submit", addingRange);

function addingRange(event) {
  event.preventDefault();
  const rangeInp = document.getElementById("ranging").value;
  const gettingData = products.filter((a) => a.price <= rangeInp);
  rangeProduct = gettingData;
  showingRange();
  rangeForm.reset();
}

function showingRange() {
  while (rangeTable.firstChild) {
    rangeTable.removeChild(rangeTable.firstChild);
  }

  for (let product of rangeProduct) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const priceCell = document.createElement("td");
    const vendorCell = document.createElement("td");
    const categoryCell = document.createElement("td");

    nameCell.textContent = product.name;
    priceCell.textContent = product.price;
    vendorCell.textContent = product.ven;
    categoryCell.textContent = product.cat;

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(vendorCell);
    row.appendChild(categoryCell);

    rangeTable.appendChild(row);
  }
}

// Showing Product by Vendor

const filterVendorForm = document.getElementById("vendorFilterForm");
const filterVendorTable = document.getElementById("productVendorTable");
let filterVendorArray = [];
filterVendorForm.addEventListener("submit", addingfilterVendor);

function addingfilterVendor(event) {
  event.preventDefault();
  const gettingFilterVendorInp = document.getElementById("vendoring");
  const gettingFilterVendorInpValue = gettingFilterVendorInp.value
    .trim()
    .toLowerCase();

  const gettingFilterVendor = products.filter(
    (a) => a.ven === gettingFilterVendorInpValue
  );
  filterVendorArray = gettingFilterVendor;
  showingFilterVendor();
  filterVendorForm.reset();
}

function showingFilterVendor() {
  while (filterVendorTable.firstChild) {
    filterVendorTable.removeChild(filterVendorTable.firstChild);
  }

  for (let product of filterVendorArray) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const priceCell = document.createElement("td");
    const vendorCell = document.createElement("td");
    const categoryCell = document.createElement("td");

    nameCell.textContent = product.name;
    priceCell.textContent = product.price;
    vendorCell.textContent = product.ven;
    categoryCell.textContent = product.cat;

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(vendorCell);
    row.appendChild(categoryCell);

    filterVendorTable.appendChild(row);
  }
}

// Showing Product By Category

const filterCategoryForm = document.getElementById("CategoryFilterForm");
const filterCategoryTable = document.getElementById("productCategoryTable");
let filterCategory = [];
filterCategoryForm.addEventListener("submit", addingFilterCategory);

function addingFilterCategory(event) {
  event.preventDefault();
  const gettingFilterCategoryInp = document.getElementById("Categorying");
  const gettingFilterCategoryValue = gettingFilterCategoryInp.value
    .trim()
    .toLowerCase();
  const gettingFilterCategoryPro = products.filter(
    (a) => a.cat === gettingFilterCategoryValue
  );
  filterCategory = gettingFilterCategoryPro;
  showingFilterCategory();
  filterCategoryForm.reset();
}

function showingFilterCategory() {
  while (filterCategoryTable.firstChild) {
    filterCategoryTable.removeChild(filterCategoryTable.firstChild);
  }

  for (let product of filterCategory) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const priceCell = document.createElement("td");
    const vendorCell = document.createElement("td");
    const categoryCell = document.createElement("td");

    nameCell.textContent = product.name;
    priceCell.textContent = product.price;
    vendorCell.textContent = product.ven;
    categoryCell.textContent = product.cat;

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(vendorCell);
    row.appendChild(categoryCell);

    filterCategoryTable.appendChild(row);
  }
}

// THE END
