// * create groceriesController object
const groceriesController = {};
let students = []

groceriesController.insertOne = async (req, res) => {
    const student_received = req.body;
    let { nombre, matricula, carrera } = student_received;

    await students.push(student_received)
    res.json({
        message: `Student ${nombre} with ${matricula} saved`
    });
};

groceriesController.getAll = (req,res) => {
    res.json(students)
}

groceriesController.getOne = (req,res) => {
    const {matricula} = req.params;
    let student = null;
    for (let index = 0; index < students.length; index++) {
        if (students[index].matricula === matricula) {
            student = students[index];
        } 
    }

    if (student) {
        res.json(student)
    } else {
        res.json({
            message: `Student with controlnumber: ${matricula} not exist.`
        })
    }
}

groceriesController.updateOne = (req,res) => {
    const {matricula} = req.params;
    const newStudent = req.body;
    let student = null;
    for (let index = 0; index < students.length; index++) {
        if (students[index].matricula === matricula) {
            student = students[index];
            students.splice(index, 1,newStudent)
        } 
    }

    if (student) {
        res.json({
            message: `Student succesfully updated.`
        })
    } else {
        res.json({
            message: `Student with controlnumber: ${matricula} not exist.`
        })
    }
}

groceriesController.deleteOne = (req,res) => {
    const {matricula} = req.params;
    let student = null;
    for (let index = 0; index < students.length; index++) {
        if (students[index].matricula === matricula) {
            student = students[index];
            students.splice(index, 1)
        } 
    }

    if (student) {
        res.json({
            message: `Student with controlnumber:${matricula} succesfully deleted.`
        })
    } else {
        res.json({
            message: `Student with controlnumber: ${matricula} not exist.`
        })
    }
}

export default groceriesController;
