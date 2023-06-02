      // JSON data with staff information


      // Get the staff container element

      const staffContainer = document.getElementById("staff-container");

      // Create a div for each staff member and add it to the container
      staffData.staff.forEach((staffMember) => {
        const staffDiv = document.createElement("div");
        staffDiv.classList.add("staff-member");
        staffDiv.innerHTML = `

          <h2>${staffMember.name}</h2>
          <p>Department: ${staffMember.department}</p>
          <button class="status-button" data-status="${staffMember.status}">Status: ${
          staffMember.status ? staffMember.status : "?"
        }</button>


        `;
        staffContainer.appendChild(staffDiv);
      });

      // Add event listener to status buttons to update status on click
      const statusButtons = document.querySelectorAll(".status-button");
      statusButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const newStatus = prompt("Enter new status:");
          button.setAttribute("data-status", newStatus);
          button.textContent = `${newStatus ? newStatus : "?"}`;
        });
      });



