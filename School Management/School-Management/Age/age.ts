
export function getAge(year: number, month: number, day: number) {
    let dob = new Date(year, month, day);
    let curDate = new Date();
    let dy = curDate.getDate() - dob.getDate();
    let mnth = curDate.getMonth() - dob.getMonth() + 1;
    let age = curDate.getFullYear() - dob.getFullYear();
    if (age === 0) {
        return age;
    }

    if (mnth > 0) {
        return (age);
    }

    if (mnth < 0) {
        return (age - 1);
    }
    if (mnth === 0) {
        if (dy >= 0) {
            return (age);
        }
        else {
            return (age - 1);
        }   
    }

}