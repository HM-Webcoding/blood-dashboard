import * as Yup from 'yup';


const AddFormValid = Yup.object().shape({
    fullName: Yup.string().min(3).max(40).required("required"),
    gender: Yup.string().required("Please select your gender"),
    bloodGroup: Yup.string().required("Please select your blood group"),
    dateOfBirth: Yup.string().required("Please select your date of birth"),
    email: Yup.string().email('Invalid email').required('Required'),
    mobile: Yup.string().matches(/^([+]\d{2})?\d{10}$/).required("enter valid number"),
    city: Yup.string().required("required"),
    lastDonate: Yup.string().required("required"),

})

export default AddFormValid