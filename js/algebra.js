function calculateDeterminant(matrix, size) {
   if (size === 1) {
      return matrix[0][0];
   } else if (size === 2) {
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

const numberofUnknowns = document.getElementById("numberofUnknowns");
const btn = document.getElementById("create");

let main = document.getElementById("main");

let alphaBet = "xyzwvutsrqponmlkjihgfedcba";

btn.addEventListener("click", () => {
   let n = numberofUnknowns.value;

   if (n === "") {
      alert("Please enter the number of unknowns");
      return;
   } else if (n < 2) {
      alert("Please enter a number greater than 1");
      return;
   } else if (n > 10) {
      alert("Please enter a number less than 10");
      return;
   }

   // Make an input selector for unknowns based on the number of unknowns, n if n = 3 then it will have 3 rows and 3 columns
   let input = "";
   for (let j = 0; j < n; j++) {
      input += `<div class="flex flex-row">`;
      for (let i = 0; i < n; i++) {
         let id = `a${i}${j}`;
         input += `<input type="text" id="${id}" placeholder="${alphaBet[i]}${j + 1}" />`;
      }
      input += "</div>";
   }

   input += "<div>";
   for (let i = 0; i < n; i++) {
      input += `<input type="text" id="b${i}" placeholder="b${i + 1}" />`;
   }
   input += "</div><br><br>";
   input += `<button id="solve">Solve</button>`;
   main.innerHTML = input;

   // Hide the create button and the number of unknowns input

   numberofUnknowns.classList.add("hidden");
   btn.classList.add("hidden");
   main.classList.remove("hidden");
});

main.addEventListener("click", (e) => {
   if (e.target.id === "solve") {
      let n = numberofUnknowns.value;
      let a = [];
      let b = [];

      // Get the values of the input fields and store them in a 2D array
      for (let i = 0; i < n; i++) {
         a[i] = [];
         for (let j = 0; j < n; j++) {
            let inputValue = document.getElementById(`a${i}${j}`).value;
            console.log(`a${i}${j}: ${inputValue}`);
            a[i][j] = isNaN(inputValue) ? 0 : parseInt(inputValue);
         }
      }

      let matrixA = a;

      // Generate the rest of matrices for the Cramer's Rule

      for (let i = 0; i < n; i++) {
         b[i] = document.getElementById(`b${i}`).value;
      }

      if (a.length === 0) {
         alert("Please enter the values of the matrix");
         return;
      } else if (b.length === 0) {
         alert("Please enter the values of the matrix");
         return;
      }

      let determinant = calculateDeterminant(matrixA, n);

      if (determinant === 0) {
         alert(
            "The determinant of the matrix is 0, the system of equations has no unique solution"
         );
         return;
      }

      let result = "";
      let resultArray = [];

      for (let i = 0; i < n; i++) {
         let matrixB = createMatrixB(matrixA, b, i, n);
         console.log(matrixB);
         let det = calculateDeterminant(matrixB, n);
         result += `x${i} = ${det / determinant}<br>`;
         resultArray.push(det / determinant);
      }

      console.log(result);

      let resultTable = "";
      for (let i = 0; i < n; i++) {
         resultTable += `<tr>
                <td class="border px-4 py-2">x${i}</td>
                <td class="border px-4 py-2">${resultArray[i]}</td>
            </tr>`;
      }

      let htmlTable = `

        <table class="table-auto">
            <thead>
                <tr>
                <th class="px-4 py-2">Unknown</th>
                <th class="px-4 py-2">Value</th>
                </tr>
            </thead>
            <tbody>
                ${resultTable}
            </tbody>
        </table>
        `;

      openModal("Result", htmlTable);
   }
});

function createMatrixB(matrixA, b, colIndex, size) {
   let matrixB = [];
   for (let i = 0; i < size; i++) {
      matrixB[i] = [];
      for (let j = 0; j < size; j++) {
         matrixB[i][j] = Number(j === colIndex ? b[i] : matrixA[i][j]);
      }
   }
   return matrixB;
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
