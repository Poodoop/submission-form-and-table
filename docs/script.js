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
        this.averageParagraph = document.getElementById('average');
    
        this.registerButton.addEventListener("click", this.register.bind(this));
    }


    async validateInputs(name, age, allowance) {
        try {
          if (name.length < 9) {
            throw new Error("Applicant's name must be at least 10 characters.");
          }
    
          if (age < 24) {
            throw new Error("Applicants must be 25 years or older.");
          }
    
          if (allowance < 99999 || allowance > 1000001) {
            throw new Error("Allowance amount must be between 100,000 and 1,000,000.");
          }
    
          this.errorMessage.textContent = "";
          return true;
          
        } catch (error) {
          this.showErrorMessage(error.message);
          return false;
        }
      }
    
    showErrorMessage(message) {
        this.errorMessage.textContent = message;
      }
    
    async register() {
        const name = this.applicantName.value;
        const age = parseInt(this.applicantAge.value);
        const allowance = parseInt(this.applicantAllowance.value);
    
        if (await this.validateInputs(name, age, allowance)) {
          const applicant = [name, age, allowance];
          this.applicants.push(applicant);
    
          const newRow = this.table.insertRow(-1);
          const cell1 = newRow.insertCell(0);
          const cell2 = newRow.insertCell(1);
          const cell3 = newRow.insertCell(2);
          cell1.textContent = name;
          cell2.textContent = age;
          cell3.textContent = allowance;
    
          this.findAverage();
    
          this.applicantName.value = "";
          this.applicantAge.value = "";
          this.applicantAllowance.value = "";
        }
    }
    
    findAverage(){
        const sumAge = this.applicants.reduce((sum, applicant) => sum + applicant[1], 0);
        const sumAllowance = this.applicants.reduce((sum, applicant) => sum + applicant[2], 0);
        const averageAge = sumAge / this.applicants.length;
        const averageAllowance = sumAllowance / this.applicants.length;

        this.averageParagraph.textContent = `Resume: The average applicant has an allowance of ${averageAllowance} with the average age of ${averageAge}.`;  
    }

}

const applicant = new Applicant();
