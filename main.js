
function calculateTax(income, expenses) {

    if (typeof income === 'number' && typeof expenses === 'number') {
        if (income >= 0 && expenses >= 0 && income >= expenses) {
            let balance = income - expenses;
    
            let tax = balance * 0.20;
    
            return tax;
            
        } else {
            return "Invalid Input";
        }
    
        
    } else {
        return "Invalid Input";
    }


    
}



function sendNotification(email) {

    if (typeof email === 'string') {
        if (email.includes("@")) {
            let address = email.split('@');
    
            return address[0] + ' sent you an email from ' + address[1];
        } else{
            return "Invalid Email";
        }
        
    } else {
        return "Invalid Email";
    }



}




function checkDigitsInName(name) {

    let typeCheck = typeof name;

    if (typeCheck === 'string') {
        for (let index = 0; index < name.length; index++) {
            
            if(name[index] >= '0' && name[index] <= '9'){
                return true;
            }
            
        }
        return false;
    } else {
        return "Invalid Input";
    }


}




function calculateFinalScore(obj) {

    let typeCheck = typeof obj;
    if (typeCheck === 'object' && Array.isArray(obj) === false) {
        let f = 0;
        if (obj.isFFamily == true) {
            f = 20;
        }
        let sum = obj.testScore + obj.schoolGrade + f;
        if (sum >= 80) {
            return true;
        } else {
            return false;
        }
        
    } else {
        return "Invalid Input";

    }

}





function waitingTime(waitingTimes , serialNumber) {
    let typeCheck1 = typeof waitingTimes;
    let typeCheck2 = typeof serialNumber;

    if (Array.isArray(waitingTimes) === true && typeCheck2 === 'number') {

        if (serialNumber <= waitingTimes.length) {
            return "Invalid Input";
        }
        
        let sum=0;
        let avg;

        let left = (serialNumber-1) - waitingTimes.length;  

        for (let index = 0; index < waitingTimes.length; index++) {

            sum += waitingTimes[index];
            avg = Math.round(sum/waitingTimes.length);
        }

        return left*avg;

        
    } else {
        return "Invalid Input";
    }


}

