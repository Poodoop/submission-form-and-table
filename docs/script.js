const tabButtons = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-pane");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        tabContent.forEach((content) => {
            content.classList.add("hidden");
        });
        const targetTab = button.getAttribute("data-tab");
        document.getElementById(targetTab).classList.remove("hidden");
    });
});

class Applicant{
    constructor() {
        this.applicants = [];
        this.applicantName = document.getElementById('name');
        this.applicantAge = document.getElementById('age');
        this.applicantAllowance = document.getElementById('allowance');
        this.registerButton = document.getElementById('register');
        this.table = document.getElementById('table');
        this.errorMessage = document.getElementById('error-message');
    
        this.registerButton.addEventListener("click", this.applicantRegister.bind(this));
      }

    validateInputs(name, age, allowance) {

        if (name.length <= 10) {
        this.errorMessage.textContent = "Applicant's name must be at least 10 characters.";
        return false;
        }

        if (age <= 25) {
        this.errorMessage.textContent = "Applicants must be 25 years or older.";
        return false;
        }

        if (allowance <= 100000 || allowance >= 1000000) {
        this.errorMessage.textContent = "Allowance amount must be between 100,000 and 1,000,000.";
        return false;
        }

        this.errorMessage.textContent = '';
        return true;
    }
    
    applicantRegister() {
        const name = this.applicantName.value;
        const age = parseInt(this.applicantAge.value);
        const allowance = parseInt(this.applicantAllowance.value);
    
        if (this.validateInputs(name, age, allowance)) {
          const applicant = [name, age, allowance];
          this.applicants.push(applicant);
    
          const newRow = this.table.insertRow(-1);
          const cell1 = newRow.insertCell(0);
          const cell2 = newRow.insertCell(1);
          const cell3 = newRow.insertCell(2);
          cell1.textContent = name;
          cell2.textContent = age;
          cell3.textContent = allowance;
    
          this.applicantName.value = '';
          this.applicantAge.value = '';
          this.applicantAllowance.value = '';
        }
      }

}

const applicant = new Applicant();
