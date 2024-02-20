let mat1Row = 0;
let mat1Col = 0;

let mat2Row = 0;
let mat2Col = 0;

// Create Matrix
document.getElementById("create").addEventListener("click", function () {
   var row = parseInt(document.getElementById("row").value);
   var col = parseInt(document.getElementById("col").value);
   createMatrix(row, col);
});

// Add Matrix
document.getElementById("add").addEventListener("click", function () {
   let matrix1 = document.getElementById("mat").querySelectorAll("input");
   let matrix2 = document.getElementById("mat2").querySelectorAll("input");

   let matrix01 = [];
   let k = 0;
   for (let i = 0; i < mat1Row; i++) {
      let temp = [];
      for (let j = 0; j < mat1Col; j++) {
         temp.push(parseInt(matrix1[k].value));
         k++;
      }
      matrix01.push(temp);
   }

   let matrix02 = [];
   k = 0;
   for (let i = 0; i < mat2Row; i++) {
      let temp = [];
      for (let j = 0; j < mat2Col; j++) {
         temp.push(parseInt(matrix2[k].value));
         k++;
      }
      matrix02.push(temp);
   }

   let result = matrixAdd(matrix01, matrix02);

   if (result === false) {
      alert("Matrix addition is not possible");
      return;
   }

   let htmlTable = ``;

   for (let i = 0; i < result.length; i++) {
      htmlTable += `<tr>`;
      for (let j = 0; j < result[i].length; j++) {
         htmlTable += `<td>${result[i][j]}</td>`;
      }
      htmlTable += `</tr>`;
   }

   let table = `
      <table class="table-auto">
         <tbody>
            ${htmlTable}
         </tbody>
      </table>
   `;

   openModal("Matrix Addition Results", table);
});

// Subtract Matrix
document.getElementById("subtract").addEventListener("click", function () {
   let matrix1 = document.getElementById("mat").querySelectorAll("input");
   let matrix2 = document.getElementById("mat2").querySelectorAll("input");

   let matrix01 = [];
   let k = 0;
   for (let i = 0; i < mat1Row; i++) {
      let temp = [];
      for (let j = 0; j < mat1Col; j++) {
         temp.push(parseInt(matrix1[k].value));
         k++;
      }
      matrix01.push(temp);
   }

   let matrix02 = [];
   k = 0;
   for (let i = 0; i < mat2Row; i++) {
      let temp = [];
      for (let j = 0; j < mat2Col; j++) {
         temp.push(parseInt(matrix2[k].value));
         k++;
      }
      matrix02.push(temp);
   }

   let result = matrixSubtract(matrix01, matrix02);

   if (result === false) {
      alert("Matrix subtraction is not possible");
      return;
   }

   let htmlTable = ``;

   for (let i = 0; i < result.length; i++) {
      htmlTable += `<tr>`;
      for (let j = 0; j < result[i].length; j++) {
         htmlTable += `<td>${result[i][j]}</td>`;
      }
      htmlTable += `</tr>`;
   }

   let table = `
      <table class="table-auto">
         <tbody>
            ${htmlTable}
         </tbody>
      </table>
   `;

   openModal("Matrix Subtraction Results", table);
});

// Multiply Matrix
document.getElementById("multiply").addEventListener("click", function () {
   let matrix1 = document.getElementById("mat").querySelectorAll("input");
   let matrix2 = document.getElementById("mat2").querySelectorAll("input");

   let matrix01 = [];
   let k = 0;
   for (let i = 0; i < mat1Row; i++) {
      let temp = [];
      for (let j = 0; j < mat1Col; j++) {
         temp.push(parseInt(matrix1[k].value));
         k++;
      }
      matrix01.push(temp);
   }

   let matrix02 = [];
   k = 0;
   for (let i = 0; i < mat2Row; i++) {
      let temp = [];
      for (let j = 0; j < mat2Col; j++) {
         temp.push(parseInt(matrix2[k].value));
         k++;
      }
      matrix02.push(temp);
   }

   let result = matrixMultiply(matrix01, matrix02);

   if (result === false) {
      alert("Matrix multiplication is not possible");
      return;
   }

   let htmlTable = ``;

   for (let i = 0; i < result.length; i++) {
      htmlTable += `<tr>`;
      for (let j = 0; j < result[i].length; j++) {
         htmlTable += `<td>${result[i][j]}</td>`;
      }
      htmlTable += `</tr>`;
   }

   let table = `
      <table class="table-auto">
         <tbody>
            ${htmlTable}
         </tbody>
      </table>
   `;

   openModal("Matrix Multiplication Results", table);
});

// Multiply Matrix by Scalar
document.getElementById("multiplyS").addEventListener("click", function () {
   let matrix = document.getElementById("mat").querySelectorAll("input");
   let scalar = parseInt(prompt("Enter the scalar value"));

   if (isNaN(scalar)) {
      alert("Please enter a valid scalar value");
      return;
   }

   let htmlTable = ``;
   let row = mat1Row;
   let col = mat1Col;
   let matrix1 = [];
   let k = 0;
   for (let i = 0; i < row; i++) {
      let temp = [];
      for (let j = 0; j < col; j++) {
         temp.push(parseInt(matrix[k].value));
         k++;
      }
      matrix1.push(temp);
   }

   let result = [];
   for (let i = 0; i < row; i++) {
      let temp = [];
      for (let j = 0; j < col; j++) {
         temp.push(matrix1[i][j] * scalar);
      }
      result.push(temp);
   }

   for (let i = 0; i < result.length; i++) {
      htmlTable += `<tr>`;
      for (let j = 0; j < result[i].length; j++) {
         htmlTable += `<td>${result[i][j]}</td>`;
      }
      htmlTable += `</tr>`;
   }

   let table = `
      <table class="table-auto">
      <br>
         <tbody>
            ${htmlTable}
         </tbody>
      </table>
   `;

   openModal("Matrix Multiplication by Scalar " + scalar, table);
});

document.getElementById("inverse").addEventListener("click", function () {
   let matrix = document.getElementById("mat").querySelectorAll("input");
   let row = mat1Row;
   let col = mat1Col;
   let matrix1 = [];
   let k = 0;
   for (let i = 0; i < row; i++) {
      let temp = [];
      for (let j = 0; j < col; j++) {
         temp.push(parseInt(matrix[k].value));
         k++;
      }
      matrix1.push(temp);
   }

   let determinant = 0;

   if (row != col) {
      alert("Determinant can be calculated for square matrix only");
   } else {
      determinant = calculateDeterminant(matrix1, row);
   }

   if (determinant == 0) {
      alert("Inverse Matrix does not exist for the given matrix");
      return;
   }

   let inverseMatrix = [];

   if (row != col) {
      alert("Inverse can be calculated for a square matrix only");
      return;
   }

   if (row === 2 && col === 2) {
      inverseMatrix.push([matrix1[1][1] / determinant, -matrix1[0][1] / determinant]);
      inverseMatrix.push([-matrix1[1][0] / determinant, matrix1[0][0] / determinant]);
   } else {
      let adj = new Array(matrix1.length).fill(null).map(() => new Array(matrix1.length));
      let inv = new Array(matrix1.length).fill(null).map(() => new Array(matrix1.length));

      adjoint(matrix1, adj);

      if (inverse(matrix1, inv)) inverseMatrix = inv;
   }

   let htmlTable = ``;

   for (let i = 0; i < inverseMatrix.length; i++) {
      htmlTable += `<tr>`;
      for (let j = 0; j < inverseMatrix[i].length; j++) {
         htmlTable += `<td>${inverseMatrix[i][j]}</td>`;
      }
      htmlTable += `</tr>`;
   }

   let table = `
      <table class="table-auto">
      <br>
         <tbody>
            ${htmlTable}
         </tbody>
      </table>
   `;
   openModal("Inverse Matrix", table);
});

// Determinant
document.getElementById("determinant").addEventListener("click", function () {
   let matrix = document.getElementById("mat").querySelectorAll("input");
   let row = mat1Row;
   let col = mat1Col;

   if (row != col) {
      alert("Determinant can be calculated for square matrix only");
      return;
   }

   let matrix1 = [];
   let k = 0;
   for (let i = 0; i < row; i++) {
      let temp = [];
      for (let j = 0; j < col; j++) {
         temp.push(parseInt(matrix[k].value));
         k++;
      }
      matrix1.push(temp);
   }

   let determinant = calculateDeterminant(matrix1, row);

   openModal("Determinant", `The determinant of the matrix is ${determinant}`);
});

// Transpose Matrix
document.getElementById("transpose").addEventListener("click", function () {
   let matrix = document.getElementById("mat").querySelectorAll("input");
   let row = mat1Row;
   let col = mat1Col;
   let matrix1 = [];
   let k = 0;
   for (let i = 0; i < row; i++) {
      let temp = [];
      for (let j = 0; j < col; j++) {
         temp.push(parseInt(matrix[k].value));
         k++;
      }
      matrix1.push(temp);
   }

   let result = [];

   for (let i = 0; i < col; i++) {
      let temp = [];
      for (let j = 0; j < row; j++) {
         temp.push(matrix1[j][i]);
      }
      result.push(temp);
   }

   let htmlTable = ``;

   for (let i = 0; i < result.length; i++) {
      htmlTable += `<tr>`;
      for (let j = 0; j < result[i].length; j++) {
         htmlTable += `<td>${result[i][j]}</td>`;
      }
      htmlTable += `</tr>`;
   }

   let table = `
      <table class="table-auto">
         <tbody>
            ${htmlTable}
         </tbody>
      </table>
   `;

   openModal("Transpose Matrix", table);
});

// Adjoint
document.getElementById("adjoint").addEventListener("click", function () {
   let matrix = document.getElementById("mat").querySelectorAll("input");
   let row = mat1Row;
   let col = mat1Col;
   let matrix1 = [];
   let k = 0;
   for (let i = 0; i < row; i++) {
      let temp = [];
      for (let j = 0; j < col; j++) {
         temp.push(parseInt(matrix[k].value));
         k++;
      }
      matrix1.push(temp);
   }

   if (row != col) {
      alert("Adjoint can be calculated for square matrix only");
      return;
   }

   let adj = new Array(matrix1.length).fill(null).map(() => new Array(matrix1.length));

   adjoint(matrix1, adj);

   // Loop through the matrix and round the values to a specific number of decimal places
   for (let i = 0; i < matrix.length; i++) {
      matrix[i].value = adj[Math.floor(i / col)][i % col];
   }
});

// Cofactor
document.getElementById("cofactor").addEventListener("click", function () {
   alert("Cofactor function is not implemented yet");
});

// Square
document.getElementById("square").addEventListener("click", function () {
   let matrix = document.getElementById("mat").querySelectorAll("input");
   let row = mat1Row;
   let col = mat1Col;
   let matrix1 = [];
   let k = 0;
   for (let i = 0; i < row; i++) {
      let temp = [];
      for (let j = 0; j < col; j++) {
         temp.push(parseInt(matrix[k].value));
         k++;
      }
      matrix1.push(temp);
   }

   if (row != col) {
      alert("Square can be calculated for a square matrix only");
      return;
   }

   let result = [];

   let number = prompt("Enter the power of the matrix");

   if (isNaN(number)) {
      alert("Please enter a valid number");
      return;
   }

   if (number < 1) {
      alert("Please enter a valid number");
      return;
   }

   if (number == 1) {
      for (let i = 0; i < matrix.length; i++) {
         matrix[i].value = matrix1[Math.floor(i / col)][i % col];
      }
      return;
   }

   if (number == 2) {
      result = matrixMultiply(matrix1, matrix1);
   } else {
      // Calculate the power of the matrix
      result = matrix1;
      for (let i = 2; i <= number; i++) {
         result = matrixMultiply(result, matrix1);
      }
   }

   let htmlTable = ``;

   for (let i = 0; i < result.length; i++) {
      htmlTable += `<tr>`;
      for (let j = 0; j < result[i].length; j++) {
         htmlTable += `<td>${result[i][j]}</td>`;
      }
      htmlTable += `</tr>`;
   }

   let table = `
      <table class="table-auto">
         <tbody>
            ${htmlTable}
         </tbody>
      </table>
   `;
   openModal("Matrix to the power of " + number, table);
});

// Clear
document.getElementById("clear").addEventListener("click", function () {
   document.getElementById("mat").innerHTML = "";
   document.getElementById("mat2").innerHTML = "";
   document.getElementById("mat0").classList.add("hidden");
   document.getElementById("create").classList.remove("hidden");
   document.getElementById("row").value = "";
   document.getElementById("col").value = "";
   document.getElementById("add").classList.add("hidden");
   document.getElementById("subtract").classList.add("hidden");
   document.getElementById("multiply").classList.add("hidden");
   document.getElementById("multiplyS").classList.add("hidden");
   document.getElementById("inverse").classList.add("hidden");
   document.getElementById("determinant").classList.add("hidden");
   document.getElementById("transpose").classList.add("hidden");
   document.getElementById("adjoint").classList.add("hidden");
   document.getElementById("cofactor").classList.add("hidden");
   document.getElementById("square").classList.add("hidden");
   document.getElementById("clear").classList.add("hidden");
   document.getElementById("row").focus();
});

function createMatrix(row, col) {
   if (row == "" || col == "" || isNaN(row) || isNaN(col) || row == 0 || col == 0) {
      alert("Please enter the row and column value");
      return;
   }

   if (row < 2 && col < 2) {
      alert("Row and Column value should be greater than 1");
      return;
   }

   if (row > 100 || col > 100) {
      alert("Row and Column value should be less than 100");
      return;
   }

   let mat1 = false;
   let mat2 = false;

   if (document.getElementById("mat").innerHTML == "") {
      mat1 = false;
   } else {
      mat1 = true;
   }

   if (document.getElementById("mat2").innerHTML == "") {
      mat2 = false;
   } else {
      mat2 = true;
   }

   document.getElementById("mat0").classList.remove("hidden");
   // If there is only one matrix then show only the appropriate buttons

   if (mat1 == false && mat2 == false) {
      document.getElementById("add").classList.add("hidden");
      document.getElementById("subtract").classList.add("hidden");
      document.getElementById("multiply").classList.add("hidden");
      document.getElementById("multiplyS").classList.remove("hidden");
      document.getElementById("inverse").classList.remove("hidden");
      document.getElementById("determinant").classList.remove("hidden");
      document.getElementById("transpose").classList.remove("hidden");
      document.getElementById("adjoint").classList.remove("hidden");
      document.getElementById("cofactor").classList.remove("hidden");
      document.getElementById("square").classList.remove("hidden");
      document.getElementById("clear").classList.remove("hidden");
      mat1Row = row;
      mat1Col = col;
   } else if (mat1 == true && mat2 == false) {
      document.getElementById("add").classList.remove("hidden");
      document.getElementById("subtract").classList.remove("hidden");
      document.getElementById("multiply").classList.remove("hidden");
      document.getElementById("inverse").classList.add("hidden");
      document.getElementById("multiplyS").classList.add("hidden");
      document.getElementById("determinant").classList.add("hidden");
      document.getElementById("transpose").classList.add("hidden");
      document.getElementById("adjoint").classList.add("hidden");
      document.getElementById("cofactor").classList.add("hidden");
      document.getElementById("square").classList.add("hidden");
      document.getElementById("clear").classList.remove("hidden");
      document.getElementById("create").classList.add("hidden");
      mat2Row = row;
      mat2Col = col;
   }

   let ids = "";

   if (mat1 == false && mat2 == false) {
      ids = "mat";
   } else if (mat1 == true && mat2 == false) {
      ids = "mat2";
   } else if (mat1 == true && mat2 == true) {
      alert("You can't add more than 2 matrix");
      return;
   }

   var matrix = document.getElementById(ids);
   var label = document.createElement("label");
   label.innerHTML = "Matrix " + (ids == "mat" ? "1" : "2");
   document.getElementById(ids).appendChild(label);

   for (var i = 0; i < row; i++) {
      var div = document.createElement("div");
      div.className = "row";

      for (var j = 0; j < col; j++) {
         var input = document.createElement("input");
         input.type = "text";
         input.className = "col";
         input.placeholder = "0";
         div.appendChild(input);
      }
      document.getElementById(ids).appendChild(div);
   }
}

function openModal(title = "", text = "Default text", image = false) {
   let modalContent = "";
   if (image !== false && image !== "") {
      modalContent = `
        <h2 class="text-lg font-bold">${title}</h2>
        <p>${text}</p>
        <img src="${image}" alt="Modal image" class="mt-4 rounded-lg">
      `;
   } else {
      modalContent = `
        <h2 class="text-lg font-bold">${title}</h2>
        <p>${text}</p>
      `;
   }

   const modalOverlay = document.createElement("div");
   modalOverlay.classList.add("modal-overlay");
   modalOverlay.onclick = closeModal;

   const modalContainer = document.createElement("div");
   modalContainer.classList.add("modal-container");

   const modalHeader = document.createElement("div");
   modalHeader.classList.add("modal-header");

   const modalContentWrapper = document.createElement("div");
   modalContentWrapper.classList.add("modal-content");
   modalContentWrapper.innerHTML = modalContent;

   const modalFooter = document.createElement("div");
   modalFooter.classList.add("modal-footer");
   const closeButton = document.createElement("button");
   closeButton.innerText = "Close";
   closeButton.classList.add("modal-close");
   closeButton.onclick = closeModal;
   modalFooter.appendChild(closeButton);

   modalContainer.appendChild(modalHeader);
   modalContainer.appendChild(modalContentWrapper);
   modalContainer.appendChild(modalFooter);

   const modal = document.createElement("div");
   modal.id = "modal";
   modal.appendChild(modalOverlay);
   modal.appendChild(modalContainer);

   document.body.appendChild(modal);
}

function closeModal() {
   const modal = document.getElementById("modal");
   modal.parentNode.removeChild(modal);
}

function calculateDeterminant(matrix, size) {
   if (size === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
   } else {
      let det = 0;
      for (let i = 0; i < size; i++) {
         let subMatrix = createSubMatrix(matrix, size, i);
         det += Math.pow(-1, i) * matrix[0][i] * calculateDeterminant(subMatrix, size - 1);
      }
      return det;
   }
}

function createSubMatrix(matrix, size, colIndex) {
   let subMatrix = [];
   for (let i = 1; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
         if (j !== colIndex) {
            row.push(matrix[i][j]);
         }
      }
      subMatrix.push(row);
   }
   return subMatrix;
}

// Code for Inverse Matrix on any n x n matrix

function getCofactor(A, temp, p, q, n) {
   let i = 0,
      j = 0;

   for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
         if (row !== p && col !== q) {
            temp[i][j++] = A[row][col];

            if (j === n - 1) {
               j = 0;
               i++;
            }
         }
      }
   }
}

function determinant(A, n) {
   let D = 0;

   if (n === 1) return A[0][0];

   let temp = new Array(n).fill(null).map(() => new Array(n));

   let sign = 1;

   for (let f = 0; f < n; f++) {
      getCofactor(A, temp, 0, f, n);
      D += sign * A[0][f] * determinant(temp, n - 1);
      sign = -sign;
   }

   return D;
}

function adjoint(A, adj) {
   if (A.length === 1) {
      adj[0][0] = 1;
      return;
   }

   let temp = new Array(A.length).fill(null).map(() => new Array(A.length));

   for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A.length; j++) {
         getCofactor(A, temp, i, j, A.length);
         let sign = (i + j) % 2 === 0 ? 1 : -1;
         adj[j][i] = sign * determinant(temp, A.length - 1);
      }
   }
}

function inverse(A, inv) {
   let det = determinant(A, A.length);
   if (det === 0) {
      console.log("Singular matrix, can't find its inverse");
      return false;
   }

   let adj = new Array(A.length).fill(null).map(() => new Array(A.length));
   adjoint(A, adj);

   for (let i = 0; i < A.length; i++)
      for (let j = 0; j < A.length; j++) inv[i][j] = adj[i][j] / det;

   return true;
}

// JS code for multiplication of two matrices of any order

function matrixMultiply(mat1, mat2) {
   if (!Array.isArray(mat1) || !Array.isArray(mat2) || !mat1.length || !mat2.length) {
      return false;
   }
   let rows1 = mat1.length,
      cols1 = mat1[0].length,
      rows2 = mat2.length,
      cols2 = mat2[0].length;
   if (cols1 !== rows2) {
      return false;
   }
   let product = [];
   for (let i = 0; i < rows1; i++) {
      product[i] = [];
      for (let j = 0; j < cols2; j++) {
         product[i][j] = 0;
      }
   }
   for (let i = 0; i < rows1; i++) {
      for (let j = 0; j < cols2; j++) {
         for (let k = 0; k < cols1; k++) {
            product[i][j] += mat1[i][k] * mat2[k][j];
         }
      }
   }
   return product;
}

function matrixAdd(mat1, mat2) {
   if (!Array.isArray(mat1) || !Array.isArray(mat2) || !mat1.length || !mat2.length) {
      return false;
   }
   let rows1 = mat1.length,
      cols1 = mat1[0].length,
      rows2 = mat2.length,
      cols2 = mat2[0].length;
   if (rows1 !== rows2 || cols1 !== cols2) {
      return false;
   }
   let sum = [];
   for (let i = 0; i < rows1; i++) {
      sum[i] = [];
      for (let j = 0; j < cols1; j++) {
         sum[i][j] = mat1[i][j] + mat2[i][j];
      }
   }
   return sum;
}

function matrixSubtract(mat1, mat2) {
   if (!Array.isArray(mat1) || !Array.isArray(mat2) || !mat1.length || !mat2.length) {
      return false;
   }
   let rows1 = mat1.length,
      cols1 = mat1[0].length,
      rows2 = mat2.length,
      cols2 = mat2[0].length;
   if (rows1 !== rows2 || cols1 !== cols2) {
      return false;
   }
   let difference = [];
   for (let i = 0; i < rows1; i++) {
      difference[i] = [];
      for (let j = 0; j < cols1; j++) {
         difference[i][j] = mat1[i][j] - mat2[i][j];
      }
   }
   return difference;
}
